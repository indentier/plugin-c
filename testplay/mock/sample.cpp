#include <iostream>
#include <string>
#include <vector>

void sayHello(const std::string& content) {
    if (content.empty()) {
        std::cout << "..." << std::endl;
    } else {
        std::cout << content << std::endl;
    }
}

int main() {
    sayHello("");
    sayHello("Hi");

    std::vector<int> nums = {1, 2, 3};
    for (int n : nums) {
        std::cout << n << std::endl;
    }

    return 0;
}
