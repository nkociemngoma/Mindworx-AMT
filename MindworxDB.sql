--Mindworx Asset Management Tool

CREATE DATABASE MindworxAssetDB

CREATE TABLE Asset(
Asset_ID int PRIMARY KEY identity (1,1),
[Description] varchar(50) not null,
Cost_Price int not null,
Depreciation int not null,
Date_Issued date not null,
Return_Date date not null,
Status_ID int FOREIGN KEY REFERENCES [Status](Status_ID),
Supplier_ID int FOREIGN KEY REFERENCES Supplier(Supplier_ID),
Username varchar(20) FOREIGN KEY REFERENCES [User]([Username])

)

 ALTER TABLE Asset with check add constraint Status_ID_FK_DeleteCascade
  Foreign key (Status_ID)
  References [Status](Status_ID)
  ON DELETE CASCADE

  ALTER TABLE Asset with check add constraint Supplier_ID_FK_DeleteCascade
  Foreign key (Supplier_ID)
  References Supplier(Supplier_ID)
  ON DELETE CASCADE

  ALTER TABLE Asset with check add constraint Username_FK_DeleteCascade
  Foreign key (Username)
  References [User](Username)
  ON DELETE CASCADE

CREATE TABLE Supplier(
Supplier_ID int PRIMARY KEY identity (1,1),
Supplier varchar(40) not null,
[Address] varchar(40) not null,
Telephone_Number varchar(12) not null,
)

CREATE TABLE [Status](
Status_ID int PRIMARY KEY identity (1,1),
[Status] varchar(30) not null,
)

CREATE TABLE [User](
Username varchar(20) PRIMARY KEY,
[Name] varchar(30) not null,
[Surname] varchar(30) not null,
Age tinyint not null,
Gender varchar(6) not null,
Cell_Number varchar(10) not null,
Email_Address varchar(30) not null,
ID_no varchar(13) not null,
[Password] varchar(15) not null,
Role_ID int FOREIGN KEY REFERENCES Role([Role_ID]),
Location_ID int FOREIGN KEY REFERENCES User_Location(Location_ID),
Programme_ID int FOREIGN KEY REFERENCES Programme(Programme_ID),
Position_ID int FOREIGN KEY REFERENCES Position(Position_ID)

)

  ALTER TABLE [User] with check add constraint Role_ID_FK_DeleteCascade
  Foreign key (Role_ID)
  References [Role](Role_ID)
  ON DELETE CASCADE

    ALTER TABLE [User] with check add constraint Location_ID_FK_DeleteCascade
  Foreign key (Location_ID)
  References User_Location(Location_ID)
  ON DELETE CASCADE

    ALTER TABLE [User] with check add constraint Programme_ID_FK_DeleteCascade
  Foreign key (Programme_ID)
  References Programme(Programme_ID)
  ON DELETE CASCADE

   ALTER TABLE [User] with check add constraint Position_ID_FK_DeleteCascade
  Foreign key (Position_ID)
  References Position(Position_ID)
  ON DELETE CASCADE

CREATE TABLE [Role](
Role_ID int PRIMARY KEY identity(1,1),
Role_Description varchar(40) not null
)

CREATE TABLE User_Location(
Location_ID int PRIMARY KEY identity (1,1),
Province varchar(20) not null,
City varchar(30) not null,
Town varchar(20) not null,
[Address] varchar(20) not null,
Coordinates varchar(30) not null
)

CREATE TABLE Programme(
Programme_ID int PRIMARY KEY identity(1,1),
[Name] varchar(30) not null,
[Start_Date] date not null,
End_Date date not null,
Company_ID int FOREIGN KEY REFERENCES Company(Company_ID)
)

  ALTER TABLE Programme with check add constraint Company_ID_FK_DeleteCascade
  Foreign key (Company_ID)
  References Company(Company_ID)
  ON DELETE CASCADE

CREATE TABLE Company(
Company_ID int PRIMARY KEY identity(1,1),
[Name] varchar(30) not null,
City varchar(30) not null,
[Address] varchar(30) not null,
Coordinates varchar(30) not null,
)

CREATE TABLE Position(
Position_ID int PRIMARY KEY identity(1,1),
Position varchar(30) not null,
[Name] varchar(30) not null,
Surname varchar(30) not null,
Department_ID int FOREIGN KEY REFERENCES Department(Department_ID)
)

  ALTER TABLE Position with check add constraint Department_ID_FK_DeleteCascade
  Foreign key (Department_ID)
  References Department(Department_ID)
  ON DELETE CASCADE

CREATE TABLE Department(
Department_ID int PRIMARY KEY identity(1,1),
Department varchar(30) not null,
Manager varchar(30) not null,
)

select * from Company