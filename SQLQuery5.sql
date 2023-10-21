use home
go
create table GiaoVien(
MaGV Nvarchar(10),
Name Nvarchar(100)
)
go
create table HocSinh(
MaSV Nvarchar(20),
Name Nvarchar(100)
)
go
alter table HocSinh add NgaySinh Date
go
truncate Table HocSinh
drop table HocSinh
go
--thêm dữ liệu
insert into HocSinh(
MaSV,
Name,
NgaySinh
)
values(
N'5',
N'tiến',
'19970721'
)
select * from HocSinh
--tao thêm bảng
use home
create table test(
MaSo int,
Ten nvarchar(30),
NgaySinh date,
Nam bit,
diachi char(20),
tienluong float
)
insert into test
values(
0,
N'tiến',
getdate(),
null,
'hanam',
0.0
)
insert into test
values(
0,
N'tiến',
getdate(),
null,
'hanam',
0.0
)
--delete
--update dữ liệu
--tạo khóa chính
create table primarykeytest
(
ID int,
Name nvarchar(20),
primary key(ID)
)
go