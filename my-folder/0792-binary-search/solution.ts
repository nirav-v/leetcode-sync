function search(nums: number[], target: number): number {
    

    let left = 0;
    let right = nums.length - 1
 


    while (left <= right){
        let mid = Math.floor((right + left)/2)
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target){
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return -1

};
