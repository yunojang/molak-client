export const enum PagesName {
  AdminStep = 'step_admin',
  AdminMaterial = 'material_admin',
  AdminTool = 'tool_admin',
  AdminToolGroup = 'tool_group_admin',
  AdminMachine = 'machine_admin',
  AdminRecommend = 'recommend_admin',
  AdminUser = 'user_admin',

  Recommend = 'recommend',
  Tool = 'tool',
  Machine = 'machine',
  Material = 'material',
}

export const pages = {
  tool: {
    user: PagesName.Tool,
    admin: PagesName.AdminTool,
  },
  material: {
    user: PagesName.Material,
    admin: PagesName.AdminMaterial,
  },
  machine: {
    user: PagesName.Machine,
    admin: PagesName.AdminMachine,
  },
  recommend: { user: PagesName.Recommend, admin: PagesName.AdminRecommend },
  step: { admin: PagesName.AdminStep },
  tool_groupe: { admin: PagesName.AdminToolGroup },
  user: { admin: PagesName.AdminUser },
};
