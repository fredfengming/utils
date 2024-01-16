---
title: "前缀树 Trie"
excerpt: "前缀树是具有索引的树状数据结构，它的检索性能优秀，其索引也对内存空间用量进行压缩。"
date: "2020-03-16T05:35:07.322Z"
---

# Trie

英文单个字母为节点的前缀树，其构建方法如下

```java
class TrieNode {
    boolean isWord;
    TierNode[] children = new TrieNode[26];
}

private void buildTrieTree(TrieNode root, String word){
    TrieNode cur = root;
    for(int i=0;i<word.length();i++){
        char ch = word.charAt(i);
        int index = ch - 'a';
        if(cur.children[index]==null){
            cur.children[index] = new TrieNode();
        }
        cur = cur.children[index];
    }
    cur.isWord = true;
}
```
