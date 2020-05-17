#!/usr/bin/python3
import csv
import json
import uuid
import yaml

def nid(tgt):
    msg=uuid.uuid5(uuid.NAMESPACE_OID,str(tgt))
    return 'n'+str(msg).replace('-','')

ds={}
ds['links']=[]
ds['nodes']=[]

with open('ds/config.yml') as cf:
    cfg = yaml.safe_load(cf)
with open('ds/elements.yml') as elements:
    ele = yaml.safe_load(elements)

def gen3D(links):
    with open(links) as df:
        reader = csv.DictReader(df)
        nodes=[]
        for row in reader: 
            row['source'].strip(' ');row['target'].strip(' ')
            if row['source'] not in nodes: nodes.append(row['source'])
            if row['target'] not in nodes: nodes.append(row['target'])
            if row not in ds['links']:
                row['source']=row['source'].replace(' ','_').replace('-','_')
                row['target']=row['target'].replace(' ','_').replace('-','_')
                ds['links'].append(row)


    with open('_uml/imgs.pu','w') as pu:
        for node in nodes:
            n={};n['id']=node.replace(' ','_').replace('-','_');n['label']=node;n['node']=nid(node);n['group']='1'
            ds['nodes'].append(n)
            try: 
                tpl='''
                @startuml {}
                skinparam dpi 300
                skinparam scale 200*100                
                !include archimate.pu
                {}_{}({},{})
                @enduml
                '''.format(ele[node]['name'].replace(' ','_').replace('-','_'),ele[node]['scope'],ele[node]['type'],nid(node),ele[node]['name'])
                pu.write(tpl.replace('    ',''))
            except:
                pu.write('\n\nDIDNT FIND SHIT, so you get a box\n')
                tpl='''
                @startuml {}
                skinparam dpi 300
                skinparam scale 200*100
                skinparam objectBorderColor black
                skinparam objectBackgroundColor ghostwhite
                skinparam RoundCorner 10
                object "{}" as {}
                @enduml
                '''.format(node.replace(' ','_').replace('-','_'),node,nid(node))
                pu.write(tpl.replace('    ',''))
                
    with open('ds/linkage.json','w') as js:
        js.write(json.dumps(ds,indent=2))

gen3D('links.csv')