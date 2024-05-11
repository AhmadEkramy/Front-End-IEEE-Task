var isPalindrome = function(x) {
    let st = x.toString();
    let l = 0;
    let r = st.length - 1;
    
    while (l < r) {
        if (st[l] !== st[r]) {
            return false;
        }
        l++;
        r--;
    }
    
    return true;
};
