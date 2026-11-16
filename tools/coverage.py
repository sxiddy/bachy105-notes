import sys,re,os,collections
tabs=open(sys.argv[1],encoding='utf-8').read().split('\n')
STOP=set('the a an of and or to in is are be by for with on at as from that this which it its into than then can will was were has have had not but also such these those their there when where how what why each any all more most other some per via used use using between both over under only one two three may called known given'.split())
def stem(w):
    w=w.lower()
    for s in ('ations','ation','ings','ing','ies','ied','ed','es','s','ly','al'):
        if len(w)>len(s)+3 and w.endswith(s): return w[:-len(s)]
    return w
def words(t): return [stem(w) for w in re.findall(r'[A-Za-zα-ωΑ-Ω][A-Za-z0-9α-ωΑ-Ω₀-₉⁰-⁹]+|\d+(?:\.\d+)?',t) if w.lower() not in STOP and len(w)>2 or re.match(r'\d',w)]
mod=sys.argv[2]
notes=set(); 
for l in tabs:
    p=l.split('\t')
    if len(p)>4 and p[0]==mod: notes|=set(words(p[4]))
for f in sys.argv[3:]:
    txt=open(f,encoding='utf-8').read()
    txt=re.sub(r'---\s*(page|slide) \d+','.',txt)
    sents=[s.strip() for s in re.split(r'(?<=[.?!])\s+|\n\s*\n|\n(?=[A-Z•▪➢\-])',txt) if len(s.split())>=6]
    seen=set(); miss=[]; n=0
    for s in sents:
        w=set(words(s))
        if len(w)<4: continue
        k=frozenset(w)
        if k in seen: continue
        seen.add(k); n+=1
        if len(w&notes)/len(w)<0.6: miss.append(' '.join(s.split())[:200])
    print(f'### {os.path.basename(f)}: {100-100*len(miss)//max(n,1)}% of {n}')
    if '-v' in os.environ.get('V',''): 
        for m in miss: print('  -',m)
