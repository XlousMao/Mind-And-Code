/**
 * 文件名：01_two_sum.cpp
 * 功能：两数之和问题的解决方案
 * 创建时间：2026-01-13
 */

#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    /**
     * 两数之和
     * @param nums - 输入数组
     * @param target - 目标值
     * @return 两个数的下标
     */
    vector<int> twoSum(vector<int>& nums, int target) {
        // 使用哈希表存储已遍历的元素及其下标
        unordered_map<int, int> num_map;
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            
            // 如果互补数已存在于哈希表中，返回结果
            if (num_map.find(complement) != num_map.end()) {
                return {num_map[complement], i};
            }
            
            // 将当前元素及其下标存入哈希表
            num_map[nums[i]] = i;
        }
        
        // 如果没有找到解，返回空数组
        return {};
    }
};
