---
prev: false
next: false
---
# git config
## 常用
::: info eg:
配置姓名
```git
git config --global user.name "xxx"
```
配置邮箱
```git
git config --global user.email "xxx"
```
查看姓名
```git
git config --global user.name
```
查看邮箱
```git
git config --global user.email
```
查看所有配置
```git
git config --list
```
用编辑器编辑git配置
```git
git config --system --edit
```
:::
::: info 级别
系统级：--system<br/>
用户级：--global<br/>
项目级：--local<br/>
:::