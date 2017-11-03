from functions import *

#학년 전체 학생의 평균 : 50점 

if __name__ == "__main__":

    #클라이언트 코드

    raw_data = get_data_from_excel('class_1.xlsx')
    #raw_data = get_data_from_file('class_1.dat')
    scores = list(raw_data.values())
    
    avg = average(scores)
    variance = variance(scores, avg)
    standard_deviation = std_dev(variance)

    sd = int(input("기준 표준편차를 입력하세요: "))
    total_avg = int(input("학년 전체 평균을 입력하세요: "))

    print("평균 : {0}, 분산 : {1}, 표준 편차 : {2}".format(avg, variance, standard_deviation))
    evaluateClass(avg, total_avg, standard_deviation, sd)