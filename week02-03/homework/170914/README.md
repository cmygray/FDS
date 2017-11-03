## homework: log-in box
<img src="sample.png" width="600" height="400">  
위 그림대로 따라 만들기  

### markup
블록-제목-폼-필드-(라벨-인풋)\*2-버튼-헬프리스트-링크\*2

## class(기능별)
  * login-section(섹셔닝)
    * __heading(제목)
    * __form(폼양식)
      * __id(섹셔닝)
      * __pw(섹셔닝)
    * __help(섹셔닝)

## class(모양별)
  * input-box
  * btn
  * bullet

> 클래스만 사용해서 완성하려고 했으나, `form.login-section__form`의 크기 조절이 안되는 문제가 생겼다. `::after`를 사용해도 높이가 버튼에 걸쳐있어서 할 수 없이 `fieldset`에 패딩과 보더를 줘서 만들었다... 헬프링크 호버효과는 아직 못함.