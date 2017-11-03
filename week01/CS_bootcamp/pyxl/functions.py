#functions.py
import math
from openpyxl import *

def average(scores): 
    #-> real number
    s = 0
    for score in scores:
        s += score
    avg = round(s / len(scores), 1)
    return avg

def variance(scores, avg):
    #-> real number
    s = 0
    for score in scores:
        s += (score - avg) ** 2
    variance = round(s / len(scores), 1)
    return variance
    
def std_dev(variance):
    std_dev = round(math.sqrt(variance), 1)
    return std_dev
    #-> real number

#openpyxl
def get_data_from_excel(filename):
    #-> dict
    rd = {}
    wb = load_workbook(filename)
    ws = wb.active
    g = ws.rows

    for i, j in g:
        rd[i.value] = j.value
    return rd

def evaluateClass(avg, total_avg, std_dev, sd):
    #-> total_avg: 전체평균, sd: user가 선택하는 기준 표준편차

    if avg < total_avg and std_dev > sd:
        print("성적이 너무 저조하고 학생들의 실력 차이가 너무 크다.")
    elif avg > total_avg and std_dev > sd:
        print("성적은 평균이상이지만 학생들 실력 차이가 크다. 주의 요망!")
    elif avg < total_avg and std_dev < sd:
        print("학생들간 실력차는 나지 않으나 성적이 너무 저조하다. 주의 요망!")
    elif avg > total_avg and std_dev < sd:
        print("성적도 평균 이상이고 학생들의 실력차도 크지 않다.")