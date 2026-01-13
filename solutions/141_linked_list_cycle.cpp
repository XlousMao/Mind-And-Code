/**
 * 文件名：141_linked_list_cycle.cpp
 * 功能：环形链表问题的解决方案
 * 创建时间：2026-01-13
 */

#include <iostream>
using namespace std;

// 链表节点定义
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    /**
     * 判断链表是否有环
     * @param head - 链表头节点
     * @return 是否有环
     */
    bool hasCycle(ListNode *head) {
        // 快慢指针法
        ListNode *slow = head;
        ListNode *fast = head;
        
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;          // 慢指针每次走一步
            fast = fast->next->next;    // 快指针每次走两步
            
            // 如果快慢指针相遇，说明有环
            if (slow == fast) {
                return true;
            }
        }
        
        // 如果快指针到达链表末尾，说明没有环
        return false;
    }
};
