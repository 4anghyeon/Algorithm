-- �ڵ带 �Է��ϼ���
SELECT animal_id,name
from animal_ins
where animal_type = 'Dog' and (name like '%El%' or name like'%el%' or name like'%eL%' or name like'%EL%')
order by name;