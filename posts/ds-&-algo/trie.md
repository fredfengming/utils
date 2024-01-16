---
title: "Trie"
excerpt: "Trie is a tree data structure with an index on each node, it is efficient for searching, and its indices compresses memory space as well"
date: "2020-03-16T05:35:07.322Z"
---

# Trie

Below is an method that builds Trie for alphabet char-based indices.

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
