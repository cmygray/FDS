
# coding: utf-8

# # 가위바위보 게임

# 가위 가위 0 draw
# 가위 바위 -1 lose
# 가위 보 -2 win
# 
# 바위 가위 1 win
# 바위 바위 0 drarw
# 바위 보 -1 lose
# 
# 보 가위 2 lose
# 보 바위 1 win
# 보 보 0 draw
# 
# 0이면 바로 비긴다
# 음수는 3을 더한다
# 1은 바로 이긴다
# 2는 바로 진다

# In[8]:

import random as rd


# In[20]:

rcp = ["가위", "바위", "보"]
index = rd.randint(0, 2)

com_key = rcp[index]
you_key = input("가위바위보! 골라보세요: ")

rcp_dic = {"가위":1, "바위":2, "보":3}

result = rcp_dic[you_key] - rcp_dic[com_key]
if result < 0:
    result += 3

print("컴퓨터는 {}를 냈습니다.".format(com_key))

if result == 0:
    print("draw!")
elif result == 1:
    print("you win!")
elif result == 2:
    print("you lose!")


# ## refactoring
# - 음수도 나머지가 구해지므로 굳이 +=3 할 필요가 없음.
# - 딕셔너리 안만들고 index로 대체
# - 에러 방지 while 추가

# In[40]:

import random as rd

rsp = ['가위', '바위', '보']
com = rsp[rd.randint(0,2)]
you = input('가위바위보! 하나만 내보세요  ')
while you not in rsp:
    you = input('똑바로 내주세요! 가위, 바위, 보 중에서 하나만 내주세요  ')

sub = rsp.index(you) - rsp.index(com)
if sub % 3 == 0:
    result = 'draw'
elif sub % 3 == 1:
    result = 'win'
else:
    result = 'lose'
    
print('''
{}!!
com: {}
you: {}
'''.format(result, com, you))

