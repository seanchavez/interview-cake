#include <stdio.h>

extern void write_extern();
int count;
main()
{
  count = 5;
  write_extern();
}