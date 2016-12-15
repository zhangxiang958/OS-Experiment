#操作系统实验
三个实验--进程调度,作业调度,内存管理

**采用本人的 Vue2.0 项目 startkit 启动实验文件**


##进程调度实验

###系统功能
模拟多进程并行的运行环境。
此程序有四种进程调度算法可供选择。分别是静态优先权算法、动态优先权算法、简单轮转法和可变时间片轮转法。
**简单轮转法**是按照进程进入就绪队列的先后次序获取CPU，它是一种非剥夺式调度。
**可变时间片轮转法**指从就绪进程排成一个队列，每次给队首进程分配CPU，而且分配时间是动态的。当该进程执行完分配的时间片后便剥夺其CPU并将其送入就绪队列队尾，然后再选择下一个队首进程分配CPU并执行一个时间片，如此循环下去。
**静态优先权算法**指进程的优先数在创建进程时可以给定一个初始值，从就绪队列中选出一个优先权最大的进程分配CPU执行完后，送入就绪队列尾，选择下一个队首的进程分配CPU并执行，如此循环。
**动态优先权算法**指进程的优先数在创建进程时可以给定一个初始值，并且可以按一定原则修改优先数。