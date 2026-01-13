class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode* kuai=head;
        ListNode* man=head;

        
        while(true)
        {
            //1.是否有环
            if(kuai==NULL||kuai->next==NULL)
            {
                return NULL;
            }
            kuai=kuai->next->next;
            man=man->next;
            //2.是否相遇
            if(kuai==man)
            {
                break;
            }
        }
        //3.寻找入环点
        kuai=head;
        while(kuai!=man)
        {
            kuai=kuai->next;
            man=man->next;
        }
        return kuai;
    }
};