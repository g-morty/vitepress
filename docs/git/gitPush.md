---
prev: false
next: false
---
# git push
将本地仓库的代码推送至远程仓库
git push [origin] [branch]:[branch]
## 常用
推送本地仓库的代码至远程仓库
```git
git push
```
推送本地仓库代码至远程仓库origin的master分支上
```git
git push origin master
```
将空分支推送到远程仓库origin的master分支上，即：删除远程仓库的master分支
```git
git push origin :master
```
同上
```git
git push origin --delete master
```