---
title: "动态规划例题"
excerpt: ""
date: "2020-03-16T05:35:07.322Z"
---

## 动态规划例题

## 例题

### 双向动态规划，找二维矩阵求最近的 0 的距离。[Leetcode link](https://leetcode.com/problems/01-matrix/)

从左上来一次，从右下再来一次，得到每个非 0cell 最近的 0 的距离。

### Longest Common Substring(LCS) 问题

求两个字符串的最长子字符串（子字符串中的字符不必在原串中连续，但先后顺序必须和原串一致）

```
if (last char same)
    LCS(*A, *B) = LCS(*，*)+1
else
    LCS(*A, *B) = Max(LCS(*A, *),LCS(*, *B))
```
