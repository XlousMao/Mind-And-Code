class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* ret=new ListNode();
        ListNode* i=l1;
        ListNode* l=l2;
        ListNode* end = ret;
        int jinwei=0;
        while(i!=NULL||l!=NULL)
        {
            int num=jinwei;
            if(i!=NULL)
            {
                num+=i->val;
            }
            if(l!=NULL)
            {
                num+=l->val;
            }
            jinwei=num/10;
            num%=10;
            ret->next=new ListNode(num);
            ret=ret->next;
            if(i!=NULL)
            {
                i=i->next;
            }
            if(l!=NULL)
            {
                l=l->next;
            }
        }
        if(jinwei!=0)
        {
            ret->next=new ListNode(jinwei);
        }
        return end->next;
    }
};
