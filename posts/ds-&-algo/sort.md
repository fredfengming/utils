---
title: "Sort"
date: "2020-03-16T05:35:07.322Z"
---

## 速查表

|   类型   |   最差时间    | 平均时间 | 空间 | 稳定性 |     其它     |
| :------: | :-----------: | :------: | :--: | :----: | :----------: |
| 插入排序 |      n^2      |          |  1   |   Y    |              |
| 快速排序 |      n^2      |   nlgn   |  1   |   N    |              |
| 希尔排序 |      n^2      |          |  1   |   N    |              |
| 选择排序 |      n^2      |          |  1   |   N    |              |
| 冒泡排序 |      n^2      |          |  1   |   Y    |              |
| 归并排序 |     nlgn      |          |  n   |   Y    |              |
|  堆排序  |     nlgn      |          |  1   |   N    |              |
| 计数排序 |   O\(k+n\)    |          |      |        |              |
| 基数排序 | O\(d\(k+n\)\) |          |      |        |              |
|  桶排序  |      n^2      |    n     |  n   |   Y    | 快，很耗空间 |

## 选择排序：不稳定，时间复杂度 O\(n^2\)

> 选择排序的基本思想是对待排序的记录序列进行 n-1 遍的处理，第 i 遍处理是将 L[i..n]中最小者与 L[i]交换位置。
> 这样，经过 i 遍处理之后，前 i 个记录的位置已经是正确的了。

## 插入排序：稳定，时间复杂度 O\(n^2\)

> 插入排序的基本思想是，经过 i-1 遍处理后,L[1..i-1]己排好序。  
> 第 i 遍处理仅将 L[i]插入 L[1..i-1]的适当位置，使得 L[1..i] 又是排好序的序列。  
> 要达到这个目的，我们可以用顺序比较的方法。  
> 首先比较 L[i]和 L[i-1]，如果 L[i-1]≤ L[i]，则 L[1..i]已排好序，第 i 遍处理就结束了；否则交换 L[i]与 L[i-1]的位置，继续比较 L[i-1]和 L[i-2]，直到找到某一个位置 j(1≤j≤i-1)，使得 L[j] ≤L[j+1]时为止。

## 冒泡排序：稳定，时间复杂度 O\(n^2\)

> 冒泡排序方法是最简单的排序方法。这种方法的基本思想是，将待排序的元素看作是竖着排列的“气泡”，较小的元素比较轻，从而要往上浮。在冒泡排序算法中我们要对这个“气泡”序列处理若干遍。所谓一遍处理，就是自底向上检查一遍这个序列，并时刻注意两个相邻的元素的顺序是否正确。如果发现两个相邻元素的顺序不对，即“轻”的元素在下面，就交换它们的位置。显然，处理一遍之后，“最轻”的元素就浮到了最高位置；处理二遍之后，“次轻”的元素就浮到了次高位置。在作第二遍处理时，由于最高位置上的元素已是“最轻”元素，所以不必检查。一般地，第 i 遍处理时，不必检查第 i 高位置以上的元素，因为经过前面 i-1 遍的处理，它们已正确地排好序。

## 堆排序：不稳定，时间复杂度 O\(nlog n\)

> 堆排序是一种树形选择排序，在排序过程中，将 A[n]看成是完全二叉树的顺序存储结构，利用完全二叉树中双亲结点和孩子结点之间的内在关系来选择最小的元素。

## 归并排序：稳定，时间复杂度 O\(nlog n\)

> 设有两个有序（升序）序列存储在同一数组中相邻的位置上，不妨设为 A[l..m]，A[m+1..h]，将它们归并为一个有序数列，并存储在 A[l..h]。

## 快速排序：不稳定，时间复杂度 最理想 O\(nlogn\) 最差时间 O\(n^2\)

> 快速排序是对冒泡排序的一种本质改进。它的基本思想是通过一趟扫描后，使得排序序列的长度能大幅度地减少。在冒泡排序中，一次扫描只能确保最大数值的数移到正确位置，而待排序序列的长度可能只减少 1。快速排序通过一趟扫描，就能确保某个数（以它为基准点吧）的左边各数都比它小，右边各数都比它大。然后又用同样的方法处理它左右两边的数，直到基准点的左右只有一个元素为止。

## 希尔排序：不稳定，时间复杂度 平均时间 O\(nlogn\) 最差时间 O\(n^s\) 1&lt;s&lt;2

> 在直接插入排序算法中，每次插入一个数，使有序序列只增加 1 个节点，并且对插入下一个数没有提供任何帮助。如果比较相隔较远距离（称为 增量）的数，使得数移动时能跨过多个元素，则进行一次比较就可能消除多个元素交换。D.L.shell 于 1959 年在以他名字命名的排序算法中实现了这一思想。算法先将要排序的一组数按某个增量 d 分成若干组，每组中记录的下标相差 d.对每组中全部元素进行排序，然后再用一个较小的增量 对它进行，在每组中再进行排序。当增量减到 1 时，整个要排序的数被分成一组，排序完成。

# 冒泡排序

1、I 从第一个元素遍历到最后一个元素  
2、j 从最后一个元素遍历到第 i ＋ 1 个元素  
3、如果 A[j]<A[j-1]，交换它们  
`4、每次大循环，都把最小元素下沉`

```
For(i=1 to length)
    For(j=length downto i+1)
        If(A[j]<A[j-1])
            Swap A[j], A[j-1]
    //此时i是 I 到 length之间的最小元素
//此时每个位置都经历过“获得下沉到底的最小元素”
```

# Buck Sort

1、数组有 n 个元素，则创建 n 个桶，桶也是数列（数组或链表）。  
2、每个元素按它们的值，分类放到各个桶。  
3、插入排序每个桶内的值（每个桶数据量少，插入排序反而快捷）  
4、串联每个桶，得到排序结果。

```text
/// <summary>
/// 桶排序
/// 1),已知其区间,例如[1..10],学生的分数[0...100]等
/// 2),如果有重复的数字,则需要 List<int>数组,这里举的例子没有重复的数字
/// </summary>
/// <param name="unsorted">待排数组</param>
/// <param name="maxNumber">待排数组中的最大数,如果可以提供的话</param>
/// <returns></returns>
static int[] bucket_sort(int[] unsorted, int maxNumber = 99)
{
    int[] sorted = new int[maxNumber + 1];
    for (int i = 0; i < unsorted.Length; i++)
    {
        sorted[unsorted[i]] = unsorted[i];
    }
    return sorted;
}
static void Main(string[] args)
{
    int[] x = { 99, 65, 24, 47, 50, 88,33, 66, 67, 31, 18 };
    var sorted = bucket_sort(x, 99);
    for (int i = 0; i < sorted.Length; i++)
    {
        if (sorted[i] > 0)
            Console.WriteLine(sorted[i]);
    }
    Console.ReadLine();
}
```

# Heap Sort

## 建堆

- 自底向上循环
- 依次调用 Heapfy

## 排序

- 取堆顶最大或最小值
- 堆顶 Heapfy

```java
//构建大根堆：将array看成完全二叉树的顺序存储结构
private int[] buildMaxHeap(int[] array){
    //从最后一个节点array.length-1的父节点（array.length-1-1）/2开始，直到根节点0，反复调整堆
    for(int i=(array.length-2)/2;i>=0;i--){
        adjustDownToUp(array, i,array.length);
    }
    return array;
}

//将元素array[k]自下往上逐步调整树形结构
private void adjustDownToUp(int[] array,int k,int length){
    int temp = array[k];
    for(int i=2*k+1; i<length-1; i=2*i+1){    //i为初始化为节点k的左孩子，沿节点较大的子节点向下调整
        if(i<length && array[i]<array[i+1]){  //取节点较大的子节点的下标
            i++;   //如果节点的右孩子>左孩子，则取右孩子节点的下标
        }
        if(temp>=array[i]){  //根节点 >=左右子女中关键字较大者，调整结束
            break;
        }else{   //根节点 <左右子女中关键字较大者
            array[k] = array[i];  //将左右子结点中较大值array[i]调整到双亲节点上
            k = i; //【关键】修改k值，以便继续向下调整
        }
    }
    array[k] = temp;  //被调整的结点的值放人最终位置
}

//堆排序
public int[] heapSort(int[] array){
    array = buildMaxHeap(array); //初始建堆，array[0]为第一趟值最大的元素
    for(int i=array.length-1;i>1;i--){
        int temp = array[0];  //将堆顶元素和堆低元素交换，即得到当前最大元素正确的排序位置
        array[0] = array[i];
        array[i] = temp;
        adjustDownToUp(array, 0,i);  //整理，将剩余的元素整理成堆
    }
    return array;
}


//删除堆顶元素操作
public int[] deleteMax(int[] array){
    //将堆的最后一个元素与堆顶元素交换，堆底元素值设为-99999
    array[0] = array[array.length-1];
    array[array.length-1] = -99999;
    //对此时的根节点进行向下调整
    adjustDownToUp(array, 0, array.length);
    return array;
}
```

# Insertion Sort 插入排序

`依次拿下一个，每次插入到正确的位置`

- 对于已排序的队列，插入一个新元素时，只要右移所有比他大的元素，然后把它放进空位即可。
- 仅第一个元素所在的队列，本身就是已排序队列
- 排序前 2 个元素所在队列，然后 3 元素队列，……直到最后一个元素，排序结束。

```c#
for(i=2 to A.length) //从第二个元素开始到末尾
    Key = A[i]

    j = i - 1              //定位前一个元素，然后前移
    while j>0 && A[j]>key   //遍历值比key大的元素，后移它们
        A[j+1] = A[j]          //后移
        J--
    //此时大元素都到右边
    A[j+1] = key   //插入当前元素
    //此时 I 之前的就排序好了
```

# Merging Sort 归并排序

1、平分数列  
2、递归归并排序左右子数列  
3、合并左右子数列

```java
*未实际编码验证
//排序数组A
mergeSort(A, low, high)
    If(low<high)
        mid=(low+high)/2
        mergeSort(A, low, mid)
        mergeSort(A,mid+1, high)
        merge(A, low, mid, high)

Merge(A, low, mid, high)
    Copy A[low]-A[mid] to array B1
    Copy A[mid+1]-A[high] to array B2
    I1 = low
    I2 = mid+1
    While(l1<=mid && l2<=high)
        If B1[l1]<=B2[l2]
            Copy B1[l1] to A[low]
            i1++
        Else
            Copy B2[l2] to A[low]
            i2++
        Low++
    while(i1<mid)
        A[low]=B1[i1]
        I1++
    While(i2<high)
        A[low]=B2[i2]
        I2++
```

# Quick Sorting 快速排序

## 思路

- 1、数组中取第一个，然后将比它小的移到左边，大的移到右边。
- 2、数组被切割成 2 部分，以 mid 作为切割值。
- 3、递归左右 2 部分，当元素只有一个时，递归算法收敛。

```c#
public class Solution
{
    private int Divide(int[] array, int low, int high)
    {
        int value = array[low];

        while (low < high)
        {
            if (array[high] >= value && high > low)
            {
                high--;
            }
            array[low] = array[high];

            if (array[low] <= value && high > low)
            {
                low++;
            }

            array[high] = array[low];
        }

        array[low] = value;

        return high;
    }

    private void QuickSort(int[] array, int low, int high)
    {
        if (low >= high)
            return;

        int middle = Divide(array, low, high);
        QuickSort(array, low, middle - 1);
        QuickSort(array, middle + 1, high);
    }

    public void QuickSort(int[] array)
    {
        QuickSort(array, 0, array.Length - 1);
    }
}

```

# Selection Sort 选择排序

思路：
挑最小的放到头上  
1、从第 1 个元素开始，全局扫描得到最小值，然后交换第一个位置和最小值。  
2、从第 2 个元素开始，求最小值，交换到第 2 个位置。  
3、循环直到结束

# Shell Sort 希尔排序

分组插入排序，减少数字的移动，从而提高性能。  
一开始分 n/2 组，再来分 n/4 组，直到分 1 组（n 是成员总数）  
每次组内插入排序即可

```c#
static void shell_sort(int[] unsorted, int len)
{
    int group, i, j, temp;
    for (group = len / 2; group > 0; group /= 2)
    {
        for (i = group; i < len; i++)
        {
            for (j = i - group; j >= 0; j -= group)
            {
                if (unsorted[j] > unsorted[j + group])
                {
                    temp = unsorted[j];
                    unsorted[j] = unsorted[j + group];
                    unsorted[j + group] = temp;
                }
            }
        }
    }
}
```
