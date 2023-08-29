import re
import os
import pandas as pd

# pattern = r'\([^)]*\)'  # ()
# pattern1 = r'\[[^)]*\]'  # []
# pattern2 = r'\<[^)]*\>'  # <>
# pattern3 = r'\{[^)]*\}'  # {}
# pattern4 = r'\【[^)]*\】' # 【】
# pattern5 = r'\❝[^)]*\❞' #  ❝ ❞

# # print(data_path)
# def instagram():
    
#     files_path = os.path.abspath("C:\ITStudy\crawling\공식사이트")
#     files=os.listdir(files_path)

#     data_path=[]
#     for file in files:
#         file_path=os.path.join(files_path,file)
#     data_path.append(file_path)
#     for file in data_path:
#         with open(file, encoding='utf-8') as f:
#             with open('preprocessed_text.txt','w', encoding='utf-8')as w:
#                 data = (f.readlines())

#                 for str_ in data:
#                     sub = (str_.split(','))
#                     clean_text = re.sub(r'[^\w\s]', '', sub[1])
#                     w.write(clean_text)

# def cardnews():
#     card_path = os.path.join('C:\ITStudy\waterFlat\crawling\태그','aa.xlsx')
#     data = pd.read_excel(card_path,header=None,index_col = None)
#     # print(len(data['문구']))
#     # print((data))
#     # print((data[0][0]))

#     with open('preprocessed_sms_ori.txt','w', encoding='utf-8')as w:
#         for item in data[0]:
#             pass
#             # print(item)
#             # w.write(item)
#             w.write(item.replace('\n',' ')+'\n')

to_replace=['Web발신',
            '광고',
            '이소영',
            '이민희',
            '안제현',
            '정진우',
            '민채영',
            '--'
            ]

def preprocessing(ori_file):
    data_path = (ori_file.split('\\')[:-2])
    data_path.append('preprocessed')
    filename=ori_file.split('\\')[-1].split('_')[0]+'_final.txt'
    data_path.append(filename)
    # preprocessed_file='./crawling/preprocessed/'+ filename
    preprocessed_file='/'.join(data_path)
    # preprocessed_file=os.path.join(*data_path, 'preprocessed', filename)
    # preprocessed_file=(ori_file.split('\\')[-1].split('_')[0]+'_final.txt')
    with open(ori_file,'r', encoding='utf-8')as f:
        with open(preprocessed_file,'w', encoding='utf-8')as w:
            data=f.readlines()
            for str_ in data:
                #괄호 제거
                str_ = re.sub(r'[\(\)\{\}\[\]\<\>]', '', str_)

                #개인정보, web발신, 광고 제거
                for rep in to_replace:
                    str_=str_.replace(rep,'')
                str_ = (str_.replace('⁉', '?'))
                
                # 자모 분리된 str 제거
                str_temp = re.sub(r'[ㄱ-ㅎㅏ-ㅣ]', '@@@@@', str_)
                if '@@@@@' in str_temp:
                    continue
                
                #한글,부호,띄어쓰기 통과
                str_ = re.sub(r'[^가-힣!-~\s]', '', str_)
                str_ = re.sub(r'[\"\']', '', str_)

                
                # #, @, * 포함 단어 제거
                tmp=[]
                for word in str_.split():
                    if ('#' in word) or ('@' in word) or ('*' in word):
                        continue
                    tmp.append(word)
                str_=' '.join(tmp)+'\n'

                # URL 제거
                str_ = re.sub(r'https?://\S+|www\.\S+', '', str_)
                str_ = re.sub(r'bit\.\S+', '', str_)
                str_ = re.sub(r'Bit\.\S+', '', str_)
                
                w.write(str_)


if __name__ == "__main__":
    files_path = os.path.abspath("./crawling/data")
    files=os.listdir(files_path)
    data_path=[]
    for file in files:
        file_path=os.path.join(files_path,file)
        data_path.append(file_path)
    for file in data_path:
        preprocessing(file)