SELECT RolePermission.Role As "role",
    RolePermission.PermFetch As "fetch",
    RolePermission.PermCreate As "create",
    RolePermission.PermUpdate As "update",
    RolePermission.PermDelete As "delete",
FROM RolePermission
WHERE RolePermission.Role = @Role

