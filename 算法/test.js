var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(target==nums[i]+nums[j]){
                return [i,j]
            }
        }
    }

};

const res=twoSum([2,7,11,15],13)
console.log('res',res)