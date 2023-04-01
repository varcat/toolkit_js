```typescript
const obj = { name: 'wsp', dept: { id: 1, name: 'dept', members: [ { name: 'n1' }, { name: 'n2' } ] } };

get(obj, `dept.id`); // 1
get(obj, `dept.members[0].name`); // 'n1';
get(obj, `dept.members.0.name`); // 'n1';
// 支持数组
get(obj, ["dept", "members", 0, "name"]); // 'n1';
// 获取不存在的属性
get(obj, `aa.bb.cc.dd`); // undefined
```
