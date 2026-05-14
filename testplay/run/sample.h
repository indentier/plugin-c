#ifndef SAMPLE_H
#define SAMPLE_H

void say_hello(const char* content)                                             ;

typedef struct                                                                  {
    const char* name                                                            ;
    int age;                                                                    }
User                                                                            ;

User make_user(const char* name, int age)                                       ;

#endif /* SAMPLE_H */
