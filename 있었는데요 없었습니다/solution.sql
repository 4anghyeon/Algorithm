
select animal_id,name
from(
    SELECT distinct a.animal_id,a.name,a.datetime
    from animal_ins a, animal_outs b
    where a.animal_id = b.animal_id and a.datetime>b.datetime
    )
    order by datetime