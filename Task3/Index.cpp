#include <iostream>
using namespace std;
int reverseNumber(int num);

int main() {
  cout << "Enter a Number to be reversed:\n";
  int num ;
  cin >> num;
  int reversedNum = reverseNumber(num);
  
  cout << "Original number: " << num << endl;
  cout << "Reversed number: " << reversedNum << endl;
  
  return 0;
}

int reverseNumber(int num) {
  int reversedNum = 0;
  while (num) {
    int digit = num % 10;

    if (reversedNum == 0 && digit == 0) {
      num /= 10;
      continue;
    }
    reversedNum = reversedNum * 10 + digit;
    num /= 10;
  }
  return reversedNum;
}
