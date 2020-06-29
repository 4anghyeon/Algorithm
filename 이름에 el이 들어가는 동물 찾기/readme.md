# 이름에 el이 들어가는 동물 찾기
## 문제 설명
ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.
<table>
<th>NAME</th><th>TYPE</th><th>NULLABLE</th>
<tr><td>ANIMAL_ID</td><td>VARCHAR(N)</td><td>FALSE</td></tr>
<tr><td>ANIMAL_TYPE</td><td>VARCHAR(N)</td><td>FALSE</td></tr>
<tr><td>DATETIME</td><td>DATETIME</td><td>FALSE</td></tr>
<tr><td>INTAKE_CONDITION	</td><td>VARCHAR(N)</td><td>FALSE</td></tr>
<tr><td>NAME</td><td>VARCHAR(N)</td><td>TRUE</td></tr>
<tr><td>SEX_UPON_INTAKE</td><td>VARCHAR(N)</td><td>TRUE</td></tr>
</table>
