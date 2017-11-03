# 170918 FDS homework

1. html 파일은 수정하지 말 것.
2. "x번 BRD"를 클릭 또는 tab이동으로 focus-in 하면 "x번 board 1번 item"~"x번 board 5번 item"이 위 그림과 같이 나타날 것
3. "x번 BRD"를 클릭 또는 tab이동으로 focus-in 하면 "x번 더보기"가 위 그림과 같이 나타날 것
---

2. .tab 을 한곳으로 모아서 나란히 표시
3. 더보기 버튼 한구석에 몰기
4. .board-active 클래스를 한 탭에만 부여하고 나머지는 display:none

> 1. grid-area의 기준을 parent가 아니라 grandparent로 하고싶은 경우, p:a, p:r을 사용해도 문제가 없는지?
> 1. 위 상황에서 중간에 낀 parent의 grid-area는 어떻게 셋팅하는지? 내 경우에는 1/1/3/3(전체영역) 사용.