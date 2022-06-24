 Create database OneDotECom;

 -- use OneDotECom

Create Table RolePermission(
	Id Int Auto_Increment Primary Key,
    Role varchar(32) Unique Not Null,
    PermFetch Boolean Default False,
    PermCreate Boolean Default False,
    PermUpdate Boolean Default False,
    PermDelete Boolean Default False
);


Create Table User(
	Id Int Auto_Increment Primary Key,
    UserName varchar(16) Unique Not Null,
    Password varchar(128) Not Null,
    Role Varchar(32) Not Null,
    Foreign Key(Role) References RolePermission(Role)
);

Insert Into RolePermission(
	Role, PermFetch, PermCreate, PermUpdate, PermDelete
) Values

	("Admin", true, true, true, true),
    ("Seller", true, true, true, false),
    ("Supporter", true,false, false, true),
    ("Customer", true, false, false, false)
;


