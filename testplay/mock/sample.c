#include <stdio.h>
#include <string.h>
#include "sample.h"

void say_hello(const char* content) {
    if (content == NULL || content[0] == '\0') {
        printf("...\n");
    } else {
        printf("%s\n", content);
    }
}

User make_user(const char* name, int age) {
    User u;
    u.name = name;
    u.age  = age;
    return u;
}

int main(void) {
    say_hello(NULL);
    say_hello("Hi");

    User users[] = {
        make_user("Alice", 30),
        make_user("Bob",   12),
    };

    for (int i = 0; i < 2; i++) {
        printf("%s: %d\n", users[i].name, users[i].age);
    }

    return 0;
}
