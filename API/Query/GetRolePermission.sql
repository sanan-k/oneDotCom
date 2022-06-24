SELECT RolePermission.Role,
    RolePermission.Fetch,
    RolePermission.Create,
    RolePermission.Update,
    RolePermission.Delete,
FROM RolePermission
WHERE RolePermission.Role = @Role

