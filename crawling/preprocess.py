import re
import os

files_path = os.path.abspath("C:\ITStudy\crawling\공식사이트")
files=os.listdir(files_path)

data_path=[]
for file in files:
    file_path=os.path.join(files_path,file)
    data_path.append(file_path)

print(data_path)
for file in data_path:
    with open(file, encoding='utf-8') as f:
        with open('preprocessed_text.txt','w', encoding='utf-8')as w:
            data = (f.readlines())

            for str_ in data:
                sub = (str_.split(','))
                clean_text = re.sub(r'[^\w\s]', '', sub[1])
                w.write(clean_text)