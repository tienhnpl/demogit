If Not Exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME ='ItemTable')
Begin
Create DataBase CustomerInfoSystem
End
Use CustomerInfoSystem
Create Table CustomerTable
(
CustomerNumber nvarchar(20) not null,
CustomerName nvarchar(64) null,
CustomerTypeCode nvarchar(10) null,
CustomerTypeName nvarchar(20) null,
PRIMARY KEY (CustomerNumber)
)
Go
If Not Exists(select * from INFORMATION_SCHEMA.TABLES where TABLE_NAME ='ItemTable')
Begin
Create Table ItemTable(
ItemNumber nvarchar(10) not null,
ItemName NVARCHAR(48) not null,
Price Decimal(21,6) null,
PRIMARY KEY (ItemNumber)
)
--Insert to Tables
Insert into CustomerTable(
CustomerNumber,
CustomerName,
CustomerTypeCode,
CustomerTypeName
)
VALUES(
'A123',
'DO MINH TIEN',
'1',
'VIP'
)
Insert into CustomerTable(
CustomerNumber,
CustomerName,
CustomerTypeCode,
CustomerTypeName
)
VALUES(
'A456',
'trung',
'2',
'pro'
)
SELECT * from CustomerTable
Insert into ItemTable Values('1',N'Sách',10000),('2',N'Vở',17000),('3',N'Báo',77000)
Insert into SupplyTable Values('A1',N'Nhã Nam'),('A2',N'Kim Đồng')