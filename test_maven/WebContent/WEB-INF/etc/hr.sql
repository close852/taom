create table department(
	department_id number(3) primary key,
	department_name varchar2(60) not null,
	location varchar2(30) 
);

--insert - 1개의 row(레코드)에 값을 넣는 쿼리구문.
insert into department (department_id, department_name, location) values (100, '기획부', '서울');
insert into department values (200, '개발부', '성남시');
insert into department (department_id, department_name) values (300, '기획부');
insert into department values (400, '영업1부', '서울');
insert into department values (500, '영업2부', '인천');
insert into department values (600, '영업3부', '부산');
insert into department values (700, '총무부', '광주');
insert into department values (800, '구매부', '서울');
insert into department (department_id, department_name) values (900, '자재부');


select * from department;




delete from department;

delete * from department;


update department
set location='광주'
where location is null

update department
set location=null
where department_name like '영업%'

delete from department
where department_name like '영업%'




delete from department where location='광주'

"update department set location = '서울' "

delete from department

select location
from   department


select department_id 부서아이디, department_name 부서명, location 지역
from department
where department_id > 500


select department_id,department_name,location
from 	department






직원(employee)
--------------------------------------------
직원_id		(employee_id)  		number(3) 		PK
--------------------------------------------
직원_이름	(employee_name) 	varchar2(30)		NN
email주소	(email) 					varchar2(50)		NN
직책			(job_position)		varchar2(30)		NN
연봉			(salary)					number				NN
입사일		(hire_date)			date					NN
소속부서 	(department_id)		number(3)			FK(부서테이블의 department_id(PK)를 참조)-부서테이블의 데이터를 참조해
select employee_id,employee_name, email, job_position, salary, hire_date, department_id from employee
create table employee(
	employee_id number(3) primary key,
	employee_name varchar2(30) not null,
	email varchar2(50) not null,
	job_position varchar2(30) not null,
	salary number not null,
	hire_date date not null,
	department_id number(3),
	constraint emp_dept_fk foreign key (department_id) references department(department_id)
);
slect * from department

insert into employee values(100, '홍길동', 'hong@kosta.or.kr', '대리', 30000000, '20101120', 200)
insert into employee values(101, '김사원', 'kim@abc.com', '사원', 32000000, '20101002', 100);
insert into employee values(102, '최사원', 'choi@abc.com', '사원', 30000000, '20121121', 300);
insert into employee values(301, '김과장', 'kim2@abc.com', '과장', 52000000, '20001012', 100);
insert into employee values(401, '이부장', 'Ree@abc.com', '부장', 72000000, '19950107', 300);
insert into employee values(201, '박대리', 'pak@abc.com', '대리', 41000000, '20080402', 100);

insert into employee values(601, '이인턴', 'lee2@abc.com', '인턴', 25000000, '20140305', null);


select * from employee

select * from department where department_id=200



create table department(
	department_id number(3),
	department_name varchar2(60),
	location varchar2(30),
	constraint dept_id_pk primary key(department_id)
);

constraint 제약조건명 제약조건 (컬럼)
;
drop table department;

--drop table 테이블명

select * from tab;






select 컬럼들
from  테이블들
where 제약조건


select 	e.employee_id, e.employee_name, e.salary,
 		    d.department_id, d.department_name, d.location
from	   employee e, department d
where   e.department_id = d.department_id(+)

--employee.department_id(FK) nullable


select e.employee_id, e.employee_name, e.salary, e.department_id from employee e
where e.employee_id=601

select d.department_id, d.department_name, d.location
from   department d
where d.department_id= e.department_id




select employee_id, employee_name, email, job_position, salary, hire_date,  department_id from employee



create table customer(
customer_id varchar(20) primary key,
customer_pwd varchar(20) not null,
customer_name varchar(20) not null,
customer_pnumber varchar(30) not null,
customer_email varchar(30) not null,
customer_mileage number(7) not null
)




drop table customer
create table customer(
 	id varchar2(30) primary key,
	password varchar2(10) not null,
	name varchar2(30) not null,
	email varchar2(30) not null,
	phonemumber varchar2(13) not null,
	mileage number(9) not null
)

