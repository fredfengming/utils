---
title: "并查集(Disjoint Set)学习笔记"
excerpt: "并查集简介及示例代码"
date: "2020-03-16T05:35:07.322Z"
---

# 并查集(Disjoint Set)学习笔记

## 概念

数据结构，它的以下两项运算非常高效

- 判断两个元素是否属于相同的组
- 合并两个组

思想：

- 每个元素属于一个组
- 每个元素有一个指向组长的“组指针”（通常为外部的 hashmap），组长的“组指针”为自己。
  - 通过对比两个元素的组长，可以快速判定它们是否同组
  - 通过修改组长的指针，可以快速合并两个组
- 寻找组长的时候，需要递归到“组指针”为自己的元素，才找到真正的组长。
  - 递归过程中，将找到的组长更新到每个节点，这样今后的查找就被优化

## 示例代码

```java
class DSUNode {
    DSUNode parent;
    List<DSUNode> children;

    public DSUNode(){
        children = new ArrayList<>();
    }

    public boolean isSameGroup(DSUNode node){
        DSUNode parent1 = this.parent == null ? this : this.parent;
        DSUNode parent2 = node.parent == null ? node : node.parent;

        return parent1 == parent2;
    }

    public void merge(DSUNode node){
        DSUNode parent1 = this.parent == null ? this : this.parent;
        DSUNode parent2 = node.parent == null ? node : node.parent;

        if(parent1.children.size()>parent2.children.size()){
            DSUNode temp = parent1;
            parent1 = parent2;
            parent2 = temp;
        }

        for(int i=0;i<parent2.children.size();i++){
            DSUNode child = parent2.children.get(i);
            parent1.children.add(child);
            child.parent = parent1;
        }

        parent1.children.add(parent2);
        parent2.parent = parent1;
    }
}
```
