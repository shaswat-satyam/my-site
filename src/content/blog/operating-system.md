---
title: "Introduction to Operating System"
description: "Operating System and its functions"
pubDate: "18 Feb 2026"
heroImage: "https://wallpapers.com/images/high/operating-system-1902-x-1137-wallpaper-dudoqxnpky4mwd51.webp"
---

# Introduction

- Intermediary - Acts an intermediary between user and hardware
- Resource Manager - Operating systems controls and coordinates the use of system resources among various application programs in an unbiased fashion
- Platform - OS provides platform on which other application programs can be installed provides the environment with which programs are executed.

![[Operating 2026-02-12 12.22.33.excalidraw]]

## Structures of OS

### Layered

- Each layer has a specific task
- Hierarchy - Layer can use the services provided by lower layer
- Independent
  ![[Operating 2026-02-12 13.19.25.excalidraw]]

### Micro kernel OS

It removes all non essential Components of Kernel
![[Operating 2026-02-12 13.22.24.excalidraw]]

### DOS

![[Operating 2026-02-12 13.29.57.excalidraw]]

## Types

### Batch

We make batches of similar types of jobs.
This was usually used in punch Card Era.
It may cause CPU to stay idle.

### Multi programming

![[Operating 2026-02-12 12.14.31.excalidraw]]
We fill RAM with multiple process.
It is generally non preemptive in Nature.
It reduces idle time.

Degree of Multi programming is the number of processes in memory

We have several jobs to keep CPU busy
Jobs are kept in Job Pool
We switch jobs when waiting for network or IO.
**Advantage**

- High and Efficient Cpu Usage
- Less Response time
- Several Process share CPU time

**Disadvantage**

- Difficult to program
- Complex Memory Management Required for Process Scheduling

### MultiTasking

![[Operating 2026-02-12 12.18.10.excalidraw]]
We allocate time quanta to each process.
It helps in providing better Response time.
It can be considered as a type of multiprogramming

### MultiProcessing / Tightly Coupled

Two or more CPUs within single system
It allows for parallel processing

**Advantage**

- Increased Thoughout
- Better Reliability
- Better Resource Utilization

### Real Time OS

This type of OS has time constraints to work with.
We have to complete the work immediately.
It helps in improving predictability, Reliability and Resource Management.

It is further divided into.

#### Hard Real Time OS

It is used we have absolute time limits.
We don't want to delay any action and It is a critical System.
Example - Jet Engine OS

#### Soft Real Time OS

It is used we have soft time limits.
The work is non critical and we can be lenient
Example - Multiplayer Game Server.

### Distributed

Process environment is distributed or Loosely coupled.
We can have separate workstations.

### Clustered

We have LAN connection to a group of machines
It improves Availability and Fault Tolerance

### Embedded

These are the types of OS which have some fixed functionality system
They can't be reprogrammed without flashing the microprocessor.

### Parallel

We have to work parallely with multiple computer system at the same time.

## Goals

- Primary - Convenience / User friendly
  It can provide an Interface to the User which can be

1. Command Line Interface
2. Graphical User Interface
3. Touch Based
4. Voice Based

- Secondary - Efficiency/ Reliability/ Maintainability

## Functions

### IO Device Management

Handles IO operations of peripheral devices like disks, etc including buffering and caching

### Network Management

Manages network protocols and functions enabling the OS to establish network connections and transfer data

### Process Management

Involves handling the creation, scheduling and termination of process which are executing programs

#### Process

In general a process is a program in execution.
A program is not a process by default.
A program is passive entity i.e a file containing a list of instructions stored on a disk.
A program becomes a process when an executable file is loaded into main memory and when it\'s PCB is created.
A process on the other hand is an active entity, which requires resources like memory, CPU time, registers, System Buses, etc.
If two processes may be associated with same program, they will be considered as two separate execution sequences and are totally different process

|              | Program                                                  | Process                                                                                                        |
| ------------ | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Definition   | A set of instructions written to perform a specific task | An instance of a program being executed.                                                                       |
| State        | Static State exists as code on disk or in storage        | Dynamic State exist in a memory and has a state.                                                               |
| Resources    | Does not require system resources when not running       | Requires CPU time, memory and other resources during execution                                                 |
| Independence | Exists Independently and is not executing                | Can operate concurrently with other process                                                                    |
| Interaction  | Does not interact with other programs or the system      | Can Interact with other process and the operating system through system calls and inter process communications |

##### States

A process changes its states as it executes.
The state of a process is defined in parts by the current activity of that process.
A process may be in one of the following states

- New - The process is being created
- Running - Instructions are being executed
- Waiting - The process is waiting for some event to occur
- Ready - The process is waiting to be assigned to a processor
- Terminated - The process has finished execution

![[Operating 2026-02-12 12.59.29.excalidraw]]

| From State | To State   | Operation            |
| ---------- | ---------- | -------------------- |
| New        | Ready      | admitted             |
| ready      | running    | scheduler Dispatch   |
| running    | terminated | exit                 |
| running    | ready      | interrupt            |
| running    | waiting    | IO or event wait     |
| waiting    | ready      | IO or event complete |

| Number of Programs | Min | Max   |
| ------------------ | --- | ----- |
| Ready              | 0   | n - 1 |
| Run                | 0   | 1     |
| Block              | 0   | n     |

###### Queues

There are various types of queues that a process can encounter during its lifetime

1. Job Queue
   Contains all processes in the system.
   It is inital queue where process are placed as they enter the system.
2. Ready Queue
   Holds processes thar are in main memory and ready to execute.
   This Queue is implemented as a linkedlist, with a ready queue header containing pointers to the first and last process control block in the list.
3. Device Queue
   used when processes require IO operations and the requested IO device is busy.
   Each device has its own queue holding processes that are waiting for it to become available.
   ![[Operating 2026-02-12 13.12.07.excalidraw]]

##### Components

1.  Text Section
    known as program code

2.  Stack
    Which contains the temporary data

3.  Data Section
    Containing global variables

4.  Heap
    which is memory dynamically allocated during process runtime

5.  Process Control Block

| Process Control Block |
| --------------------- |
| Process State         |
| Process number        |
| program counter       |
| Registers             |
| Memory Limit          |
| list of open files    |

Alternative Structure

| Process Control Block |
| --------------------- |
| Process ID            |
| Process State         |
| Program Counter       |
| Priority              |
| Register              |
| File List             |
| I/O Info              |
| Protection            |
| ...                   |

Each process is represented in the operating system by a process control block also called task control block PCB simply stores the metadata about a process

##### Parts

- Process State - The state may be new, ready , running, waiting, halted and so on
- Program Counter - It indicates the addrres of the next instruction to be executed for this process
- CPU registers - The registers vary in number and types, depending on the computer architecture. They include accumulators, index registers, stack pointers, and general purpose registers, plus any condition code information
- CPU Scheduling Information- THis information includes a process priority, pointers to scheduling queues, and any other scheduling paraneters.
- Memory Management Information- This information may include such items as the value of the base and limit registers and the page tables, or the segment tables
- IO Information- THis information includes the list of IO devices allocated to the process, a list of open files and so on.

#### Process Scheduler

##### Schedulers

A process migrates among the various scheduling queues through its lifetime The operating system must select for scheduling purposes, process from these queues in some fashion.

###### Types

|                              | Long Term                                                              | Short Term                                                              | Middle Term                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Function                     | controls the admission of new process into the system                  | Selects which ready process wil execute next                            | adjusts the degree of multiprogramming moving process between ready and waiting queue          |
| Frequency                    | Executes infrequently as it deals with the admission of new process    | executes frequently to rapidly switch between process.                  | Executes at intermediary frequency, balancing long term and short term needs                   |
| Responsiblity                | Determines which programs are admitted to the system from the job pool | Manages CPU scheduling and the switching of process.                    | COntrols the mix of CPU bound and IO bound processes to optimize throughtpupt                  |
| Impact on System performance | Influences overall system performance and degree of multiprogramming   | Directly impacts CPu utilization and response time.                     | Balances system load to prevent resource bottlenecks or idle resources.                        |
| Decision Making              | Makes decisions based on long term goals like system throughput        | Makes decisions based on short term goals like minimizing response time | Makes decisions considering both short term and long term goals optimizing resource allocation |

1.  Long Term Schedulers
    It determine which process enter the ready queue from the job pool. Operating less frequently than short term scheduler, they focus on long term system goals such as maximising throughput

2.  Medium Term schedulers
    The medium term schedulers swaps process in and out of memory to optimise CPU usages and manage memory allocation.
    By doing so, it adds a degree of multi programming and frees up memory as needed. Swapping allows to pause and later resume a process, improving overall system efficiency

3.  Short Term scheduler
    The short term scheduler or CPU schedulers which among the process that are ready to execute and allocates the CPU to one of the process

###### CPU bound and IO bound

A process execution consists of a cycle of CPU execution or wait and IO execution or wait.
Normally a process alternates between two states.
Process execution begins with the CPU burst that may be followed by a IO burst, then another CPU Io burst and so on.
Eventually in the last will end up on the CPU burst.
IO Bound Process - A process that spends more of its time doing IO that it spends doing computation.
CPU Bound Process - A process that generates IO requests infrequently, using more of its time doing computations.

###### Dispatcher

The dispatcher is the module that gives control of the CPU to the process selected by the short term scheduler.
This function involves the following, switching context, switching to user mode, jumping to the proper location in the user program to restart that program.
The dispatcher should be as fast as possible, since it is invoked during every process switch.
The time it takes for the dispatcher to stop one process and start another running is known as the dispatch latency.

##### Context Switching

Switching the CPU to another process requires performing a state save of the current process and a state restore of a different process.
This takes is known as context switching When a context switch occurs, the kernel saves the context of the old process in its PCB and loads the saved context of the new process scheduled to run.
Context switch time is pure overhead, because the system does no useful work while switching.

###### CPU scheduling

scheduling is the process of determining which process in the y queue is allocated to the CPU Various algorithms are used to this decision, such as First Come First Serve, Shortest Job , Priority and Round Robin Different algorithm supports different class of process and favour different scheduling criterion

1. Types

|                       | Non Premptive                                                        | Pre emptive                                                        |
| --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| CPU allocation        | Once a process starts, it runs to completion or waait for som event. | A process can be interrupted and moved to the ready queue          |
| Response Time         | Can be longer, especially for short tasks                            | Generally shorter as higher priority tasks can pre empt others     |
| Complexity            | Simpler to implement                                                 | More complex, requiring careful handling of shared resources       |
| Resource Utilization  | May lead o inefficient CPU utilization                               | Typically more efficient, as it can quickly switch tasks           |
| Suitable Applications | Batch Systems and applications that require predictable timing       | Inter active and real time systesm requiring responsive behaviours |

1.  Non Preemptive
    Under these algorithms, once the CPU has been allocated to a process, the process keeps the CPU until it releases the CPU willingly.
    A process will leave CPU only when a process completes its execution.
    When a process wants to perform some IO operations.

2.  Preemptive
    Under these types of algorithms, Once the CPU has been allocated to a process, A process will leave the CPU willingly or it can be forced out.
    So a process will leave CPU, When a process completes its execution.
    When a process leaves CPU voluntarily to perform some IO operations
    If a new process enters in the ready state in case of high priority then process switches from running to ready state because of time expire

**Criteria for judging algorithms**

- CPU utilisation - Keeping the CPU as busy as possible
- Throughput - If the CPU is busy executing process, then work is being done.
  One measure of work is the number of process that are completed per unit time.
- Waiting Time - It is the sum of the periods spent waiting in the ready queue
- Response Time - It is the time it takes to start responding, not the time it takes to output the response

Terms

- Arrival Time - Time at which process enters a ready State
- Burst TIme - Amount of CPU time required by the process to finish its execution
- Completion Time - Time at which process finshes its execution
- Turn Around Time - Completion Time - Arrival Time, Waiting Time + Burst Time
- Response Time - Turn Around Time - Burst Time

**Algorithms**

Example Question - 1

| i   | Arrival Time | Burst Time |
| --- | ------------ | ---------- |
| 0   | 2            | 4          |
| 1   | 1            | 2          |
| 2   | 0            | 3          |
| 3   | 4            | 2          |
| 4   | 3            | 1          |

![[Operating 2026-02-12 14.54.49.excalidraw]]

| i   | Arrival Time | Burst Time | Completion Time | Turn Around Time | Waiting Time |
| --- | ------------ | ---------- | --------------- | ---------------- | ------------ |
| 0   | 2            | 4          | 9               | 7                | 3            |
| 1   | 1            | 2          | 5               | 4                | 2            |
| 2   | 0            | 3          | 3               | 3                | 0            |
| 3   | 4            | 2          | 12              | 8                | 6            |
| 4   | 3            | 1          | 10              | 7                | 6            |

Example Question - 2
![[Operating 2026-02-12 15.00.44.excalidraw]]

| i   | Arrival Time | Burst Time |
| --- | ------------ | ---------- |
| 0   | 1            | 7          |
| 1   | 2            | 5          |
| 2   | 3            | 1          |
| 3   | 4            | 2          |
| 4   | 5            | 8          |

1.  First Come First Serve
    It is the simplest Scheduling algorithm, as the name suggest, the process that requests the CPU first is allocated the CPU first. Implementation is managed by FIFO Queue It is always non Preemptive in nature

**Advantages**

- Easy too understand
- Easy to implement using Queue
- Used for background process where execution is not urgent

**Disadvantages**

- Convoy Effect if the smaller process have to wait more for the CPU because of larger process then this defect is called Convoy Effect, It result into more average waiting time.

2.  Shortest Job First
    In this algorithm, We take the short job to execute first.
    If is is non preemptive we don\'t change process middle of execution If it is preemptive we change the process if smaller process is received It can be preemptive or non preemptive
    **Advantages**

- Pre emptive version guarantees minimal average waiting time so some time also referred as optimal algorithm.
- Provides a standard for other algo in terms of average waiting time Provides better average response time compare to FCFS

**Disadvantage**

- Here process with longer CPU burst requirement goes into starvation and have response time.
- This algorithm cannot be implemented as there is no way to know the lenght of the next CPU burst.
- As SJF is not implmentable, we use the one technique where we try to predict the CPU burst of the next coming process

3.  Priority Scheduling
    It can be preemptive or non preemptive

- Helps run important process lik user process
- process with smaller priority may strave for the CPU
- Tie Breaker is generally FCFS
- May Give starvation to some low priority process
- Special Facility to system Process
- Ageing - Increase priority as the waiting Time increases

4.  Round Robin
    It is to share CPU time for every process

- Maintain a queue to solve the problem by arrival time then add the current process at the end
- If time quanta is greater than process burst time just use the burst time only
- Helps reduce response time
- Works well in time sharing kind of SJF algo
- Longer process may starve
- Performance depends on time quantum
- No idea of priority

5.  Multi Level Queue Scheduling
    ![[multi_level_queue_scheduling.png]]
    We maintain multiple ready queue for system process, interactive process and batch process.
    Like priority in system process
    Round Robin in Interactive processes
    FCFS in Background processes
    Between queues have Round Robin

6.  Multi Level Feedback Queue Scheduling
    **TODO**

##### Process Synchronisation

As we understand in a multiprogramming environment a good number of processes compete for limited number of resources.
Concurrent access to shared data at some time may result in data inconsistency.
Race condition is a situtation in which the output of a process depends on the execution sequence of process that is if we change the order of exection of different process with respect to other process the output may change
Race condition is a condition in which the output of a process depends on the execution sequence of process

###### Process Structure

1.  Initial Section - where the process is accessing the private resources
2.  Entry Section
    It is that part of code where each process request for
    permission to enter its critical section

3.  Critical Section - Where process is access shared resources

4.  Exit Section
    It is the section where a process will exit from its
    critical section

5.  Remainder Section
    Remaining Code.

###### Criterion to solve critical section problem

1.  Mutual Exclusion
    No two processes should be present inside the critical section aat the same time.
    Only one process is allowed in the critical section at an instant of time.

2.  Progress
    If no process is executing in its critical section and some process enter their critical section, then only those process which are not executed in their remainder section can participate in deciding which enters its critical section next.
    means other process will participate which actually wish to enter. ther should be no deadlock

3.  Bounded Waiting
    There exists a bound or a limit on the waiting time allowed to enter its critical section and no process should wait indefinitely inside the critical section.
    This is a optional but desirable criteria.

###### Solutions to critical Section problem

####### Two process solution
Here we have strict alternation

1.  Using boolean variable turn
    Here we use a boolean variable turn which is initialised randomly.
    The solution follows Mutual Exclusion as the two process cannot enter the critical section at the same time.
    The solution does not follow the progress, as it is suffering from the strict alternation because we never asked the process whether or not it want to enter the critical section turn = 0.
    It will get stuck if we change the execution when we are inside a either Critical Section.
    It is a global Boolean Variable.

```c P_0.c
while(1) {
    while(turn != 0)
    {};
    {Critical Section};
    turn  = 1;
    {Remainder Section};
}
```

```c P_1.c
while(1) {
    while(turn != 1)
    {};
    {Critical Section};
    turn  = 0;
    {Remainder Section};
}
```

2.  Using boolean array flag
    Here we will use a boolean array flag with two cells, where each cell is initalized to False.
    It follows the mutual Exclusion Criteria.
    It can cause Deadlock if the context is switched after respective flag has been turned True;
    turn\[\] = \[false,false\].
    It is a global boolean array

```c P_0
while(1){
    flag[0] = true;
    while(flag[1] == true){};
    { Critical Section };
    flag[0] = false;
    { Remainder Section };
}
```

```c P_1
while(1){
    flag[1] = T;
    while(flag[0] == true){};
    { Critical Section };
    flag[1] = false;
    { Remainder Section };
}
```

3.  Peterson's solution
    It is a classic software based solution to the critical section problem for two process.
    It uses both turn boolean variable and boolean flag array

```c P_0
while(1){
    flag[0] = true;
    turn = 1;
    while(turn == 1 and flag[1] == true){};
    {Critical Section};
    flag[0] = false;
    {Remainder Section};
}
```

```c P_1
while(1){
    flag[1] = true;
    turn = 0;
    while(turn == 0 and flag[0] == true){};
    {Critical Section};
    flag[1] = false;
    {Remainder Section};
}
```

4.  Dekker's algorithm

```c P_i
do{
    flag[i] = true;
    while(flag[j]){
        if(turn == j){
            flag[i] = false;
            while(turn == j){};
            flag[i] = true;
        }
    };
    { Critical Section };
    turn = j
    flag[i] = false;
    { Remainder Section };
}while(true)
```

```c title="P_j"
do{
    flag[j] = true;
    while(flag[i]){
        if(turn == i){
            flag[j] = false;
            while(turn == i){};
            flag[j] = true;
        }
    };
    { Critical Section };
    turn = i
    flag[j] = false;
    { Remainder Section };
}while(true)
```

####### Operating System Solution
Semaphore are synchronisation tools using which we attempt n process solution.
A semaphore S is a simple integer variable that but apart from initialisation.
It is can be accessed only through two standard atomic operations: wait(s) and signal(s).
The wait(S) operation was originally termed as P(S) and signal(S) was orginally called V(S)

```c
void func Wait(s){
    while(s <= 0){};
    s--;
}

void func Signal(s){
    s++;
}
```

Peterson\'s Solution was confined to just two processes, and since in a general system can have n processes.
Semaphores provides n processes solution.
While solving Critical Section problem only we initialise semaphore S = 1.
Semaphores are going to ensure Mutual Exclusion and Progress but does not ensures bounded waiting.

```c
void func P_i(){
    while(true){
        { Initial Section };
        wait(s);
        { Critical Section };
        signal(s);
        { Remainder Section };
    }
}
```

Two Types of semaphores counting semaphores and binary semaphores.

###### Classical Problems

There are number of actual industrial problem we try to solve in order to improve our understand of Semaphores and their power of solving problems

1.  Producer Consumer Problem
    There are two process Producer and Consumers.
    Producers produces information and put it into a buffer which have n cells, that is consumed by a consumer.
    Both Producer and Consumer can produce and consume only one article at a time.
    A producer needs to check whether the buffer is overflowed or not after producing information before accessing the buffer.
    Similarly a consumer needs to check for an underflow before accessing the buffer to consume an item.
    Also the producer and consumer must be synchronised, so that once a producer and consumer it accessing the buffer the other must wait.

Now to solve the problem we will be using three semaphores:
Semaphore S = 1 **Critical Section Semaphore**
E = n **Count Empty Cells Semaphore**
F = 0 **Count Filled Cells**

```c
void func Producer(){
    while(true){
        // Produce a new Item
        wait(E); // To avoid Overflow
        wait(S);
        // Add Item to buffer
        signal(S);
        signal(F);
    }
}

void func Consumer(){
    while(true){
        wait(F); // To avoid Underflow
        wait(S);
        // Pick Item from buffer
        signal(S);
        signal(E);
        // Consume Item
    }
}
```

2.  Reader Writer Problem
    Suppose that a database is to be shared among several concurrent processes. Some of the processes may want only to read the database (readers) whereas others may want to update (Either a reader or a writer) the database (writers).
    If two readers access the shared data simultaneously no adverse effects will result.
    But if a writer and some other process(either a reader or a writer) access the database simultaneously, chaos may ensue To ensure that these difficulties do not arise, we require that the writers have exclusive access to the shared database while writing to the database.

Solution may allow moore than one reader at a time, but should not allow any writer.
The solution should strictly not allow any reader or writer, while a writer is performing a write operation.

The reader processes share the following data structures semaphore mutex = 1, wrt = 1 // Two Semaphores int readcount = 0; // variables

Three resorces are used Semaphore wrt is used for synchronizatioin between WW, WR, RW Semaphore reader is used to synchronize between RR Readcount is simple int variable which keeps counts of number of readers.

```c
void func Writer(){
    Wait(wrt);
    {Critical Section} // Write
    Signal(wrt);
}

void func Reader(){
    wait(mutex);
    readcount++;
    if(readcount == 1){
        wait(wrt);
    }
    signal(mutex);
    {Critical Section};
    wait(mutex);
    readcount--;
    if(readcount == 0){
        signal(wrt);
    }
    signal(mutex);
}
```

3.  Dining Philospher Problem
    Consider five philosphers who spend their lives thinking and eating.
    The philosphers share a circular table surrounded by five charis, each belonging to one philosphers.
    In the center of the table s a bowl of rice and the table is laid with five single chopsticks.
    When a philosphers thinks, she doesn\'t interact with her colleages

```c
void philosphers(void){
    while(T){
        Thinking();
        wait(chopsticks[i]);
        wait(chopsticks[(i+1)%5])
        Eat();
        signal(chopsticks[i]);
        signal(chopsticks[(i+1)%5]);
    }
}
```

The proposed solution for deadlock problem is allow at most four philosphers to be sitting simulataneously at the table.
Allow extra one chopstick on the table.
Allow a philosphers to pick up chopstick only if both chopsticks are available.
One philospher picks up right chopstick first and then left chopstick reverse the sequence of any philospher.
Odd philospher pick up first left chopstick and then right chopstick and even philospher picks up right chopstick and then left chopstick

- Global Semaphore after and before picking
- Separate in Odd & Even. Odd will start with left and Even will start with Right
- Separate in N & N-1. Odd will start with left and Even will start with Right

4.  The sleeping Barber Problem
    Barbershop consists of a waiting room with n chairs and a barber room with one barber chair.
    Customers arrive at random intervals, If there is an available chair in the waiting room, they sit and wait.
    If all chairs are taken, They leave THe barber sleeps if there are no customers.
    If a customer arrives and the barber is asleep, they wake the barber up.
    The challenge is to coordinate the interaction between the barber and the customers using concurrent programming mechanisms.

Semaphore barber = 0; // indicates if the barber is available
semaphore customer = 0; // Counts the waiting customers semaphore
mutex = 1; //Mutex for critical section int
waiting = 0; //Number of waiting customers

```c
void func Barber(){
    while(true){
        wait(customer);
        wait(mutex);
        waiting = waiting - 1;
        signal(barber);
        signal(mutex);
        // Cut Hair
    }
}

void func Customer(){
    wait(mutex);
    if (waiting < n){
        waiting = waiting + 1;
        signal(customers);
        signal(mutex);
        wait(barber);
        // Get Hair Cut
    } else {
        signal(mutex);
    }
}
```

####### Hardware Solution

1.  Test and Set Lock
    Software based solutions such as Peterson\'s are not guaranteed to work on modern computer architecture.
    In the following discussions, we explore several more solutions to the critical section problem using technique ranging from hardware to software , all these solutions are based on the premise of locking - that is protecting critical regions through the use of locks.
    The critical section problem could be solved simply in a single processor environment if we could prevent interrupts from occuring while a shared variable was being modified.

Lock = 0 Free
Lock = 1 Busy
can cause failure of mutual exclusion if switch between test and set
So we use test and set.
For CISC (Complete Instruction Set System)

```c
Boolean test and set(boolean *target){
    Boolean rv = *target;
    *target = true;
    return rv;
}

while(1){
    while(test and set(^lock));
    Critical Section
    lock = false;
    Remainder Section
    }

```

2.  Disable Interrupt
    Hardware solution where process have a priviledge to disable all interrupts and enable it at the time of exit.
    Should be used for OS programs only as it can block entire system.
    Not useful for multiprocessor environment as it can be time consuming to send messages.

#### Deadlock

In a multiprogramming several processes may compete for a finite number of resources.
A process request resources, if the resouces are not available at that time, the enters a waiting state.
Sometimes, a waiting process is never again able to because the resources it has requested are held by other waiting processes is called a deadlock.
A set of process is in a deadlock state when every process in the set is waiting event that can be caused only by another process in the set.

##### Necessary Condition

###### Mutual Exclusion

Atleast one resource must be held in non sharable mode.
that is only one process at a time can use the resource If another process request that resource has been released.
and then must be desired by more than one process

###### Hold and Wait

A process must be holding at least one resource and waiting to acquire additional resources that are currently being held by other processes.

###### No pre emption

Resources cannot be pre empted that is a resource can be released only voluntarily by the process holding it, after that process has completed its task

###### Circular Wait

A set P0, p1 and pn of waiting processes must exist such that P0 is waiting for a resource held by P1 P1 is waiting for a resouces held by P2 Pn-1 is waiting for a resource held by Pn and P2 is waiting for a resource held by P0.

##### Deadlock Handling Methods

###### Prevention

Design such protocols that there is no possibility of deadlock For this we have to remove one of the four necessary condition of deadlock Different deadlock prevention approach but different type of restrictions or conditions on the process and resources because of which system becomes slow and resource utilization and reduced system throughput.

####### Mutual Exclusion
In prevention approach there is no solution for mutual exclusion as resource can t be meade sharable as it is a hardware property and process also can\'t be convinced to do som eother task.
In general however we cannot prevent deadlocks by denying mutual exclusion condition, because some resources are intinisically unshareable

####### Hold and wait

1. Conservative approach - Process is allowed to run if and only if it has acquired all the resources
   Alternative protocol - A process may request some resources and before it can request any additional resources it must release as that it is currently allocated
   Wait time out - We place a max time outs up to which a process after which process must release all the holding resources and exit

####### No pre emption
If a process rquests some resources We first check whether they are avilable.
If they are, we allocated they If they are not We check whether they are allocated to some ohter process that is wants additional resouces.
If so, we pre empt the desired resources from the waiting process and allocate them to the request.
If the resources are neither available nor held by waiting process, the requesting process must wait, or may allow to preempty resources of a runninng process considering prioriity

####### Circular Wait
We can eliminate circular wait problem by giving a natural number mapping to every source and then any process can request only in the increasing order and if process wants a lower number then process must first release all the source larger than that number and then give a fresh request

###### Avoidance

Try to avoid deadlock in run time so ensuring that the system will never get in deadlocked state to avoid deadlock we require additional information about how resources are to be requested which resources a process will request during its lifetime with this additional knowledge the operating systesm can decide for each request whether process should wait or not.
Safe sequence - Some sequence in which we can satisfy demand of every process without going into deadlock, if yes this sequence is called safe sequnce
Safe state - if there exist at least one of safe sequence
Unsafe sate - if there exist no safe sequence

####### Banker Algo
Several data strucuter must be maintained to implement the banker algo.
These data structures encode the state of the resouce allocation system.
we need following data strcutures where n is the number of processes in the system and m s the nmber of resource types available - a vector of length m indicates the number of available resouces of each type.
If available\[j\] equals k then kk instances of resource type Rj are available Max - An n\*m matrix defines the maximum demand of each proces.
If MAx\[i\]\[j\] equals k then process Pi may reqyest at most K instance of resources type Rj.

Example Problem

Max Need

| i   | E   | F   | G   |
| --- | --- | --- | --- |
| 0   | 4   | 3   | 1   |
| 1   | 2   | 1   | 4   |
| 2   | 1   | 3   | 3   |
| 3   | 5   | 4   | 1   |

Allocation

| i   | E   | F   | G   |
| --- | --- | --- | --- |
| 0   | 1   | 0   | 1   |
| 1   | 1   | 1   | 2   |
| 2   | 1   | 0   | 3   |
| 3   | 2   | 0   | 0   |

Sys Max

| i   | E   | F   | G   |
| --- | --- | --- | --- |
| 0   | 8   | 4   | 6   |

Available

| i   | E   | F   | G   |
| --- | --- | --- | --- |
| 0   | 3   | 3   | 0   |

Current Need = Max Need - Allocation

| i   | E   | F   | G   |
| --- | --- | --- | --- |
| 0   | 3   | 3   | 0   |
| 1   | 1   | 0   | 2   |
| 2   | 0   | 3   | 0   |
| 3   | 3   | 4   | 1   |

If any need is satisfied remove the process and Free the resources from allocation to available.
Repeat till no process or no process can be satisfied,
If any process is left we are in unsafe else we are safe

####### Safety Algo
We can presnt the algo for findning out whether or not a system is in a safe state.
The algo can be descired as Let work and finish be vectors of m and n length initalize work = avaialble and finsh\[i\] = false for i = 0 to n-1.
Find an index i such that both finish\[i\] == false Needi =\< work if no such i exists go to 4 Work = Work + allocation Finish\[i\] = true go to step 2
If finish\[i\] == true for all i then systems is in safe stae
This algo may reqyre an order of m\*n\*n poperations to determine whether a state is safe

####### Resource allocation Graph
Dead lock can also be described in terms of directed graph called a system resource allocation graph.
This graph consists of
a set of vertices V and
a set of edges E
The set of vertices V is partioned into two differetn types of nodes P and consisting of all the active proceesses in the systesm and R then all resourcces types in the system
Any Loop in RAG is necessary but not sufficient conditino for deadlock.
If we have a single resouce in RAG, then cycle gives deadlock sufficiently and necessarily.

###### Detection

We can allow the system to enter a deadlocked sate then we can recover Once a deadlock is detected there are two options for recovery from deadlock

1.  Process Termination
    About all deadlocked process Abort one process at a time until the deadlock is removed

2.  Recourse preemption
    selecting a victim partial or complete rollback

Detection can be Active approach Invokes the algorithm at defined intervals and Lazy Approach Invoke algorithm if CPU utilisation below some threshold.

###### Ignorance

We can ignore the problem together and pretend that deadlock is not in the system

OS acts like there is no concept of deadlock ignoring deadlocks can lead to system performed issues despite this many OS opt for this approach to save on the implementing deadlock detection deadlocks are often rare so the trade off may seem justified.
many may be required when a deadlock occurs

### Concurrency Control

#### System Call

- Provide means for program to ask OS to perform reserved tasks for the OS.
- Interface to services available by OS. Calls available as routines in C/C++. Example - printf()
- Process - end, abort, load, execute, create, terminate, wait, wait event, signal event, set attributes, get attributes, memory allocation, fork
- Files - Create, delete, open, close, read, write, get attributes, set attributes
- Device - request, release, get attributes, set attributes, read, write , attach , detach
- Information - get time, get data, get system data, set system data
- Communication - get process attribute, set process attribute, get file attribute, set file attribute, set device attribute, get device attribute, create communication, delete communication, send messages, receive messages

![[Operating 2026-02-12 19.41.08.excalidraw]]

#### Threads

A thread is a basic unit of CPU utilisation consisting of a program counter a stack and a set of registers and a thread ID Traditional (heavyweight) processes have a single thread of control - There it one program counter and one sequence of instructions that can be carried out at any given time.
Multi threaded applicatios have multiple threads within a single process each with its own program coutner, stack and set of registers but sharing common code, data and strucutres

#### Multithreeading models

There are two type of threads to be managed in a moder system: User thread and kernel threads.
User threads are supported above the kernel without kern support.
These are the threads that application programmers would put into their programs.
Kernel threads are supported within the kernel of the OS itself.
All modern OS support kernel level threads, allowing the kernel to perform multiple simultaneous tasks and or the service multiple kernel systems calls simultaneously
User Thread are faster to context switch, User Level thread gets blocked entirely (Process)
![[Operating 2026-02-12 19.44.49.excalidraw]]

#### Many to One model

In the many to one model many user level threads are all mapped to a single kernel thread.
However if a blocking system call is made, then the entire process blocks even if the other user threads would other be able to continue.
because a single kernel thread can operator only on a single CPU the many tone model does not allow individual processor to split across multiple CPU.
Green threads for slaris implement the many to one model in the past but few systems continue to do so today.

##### Fork Command

In number of applications specially in those where work of repetitive nature, like web server with every client we have to run similar type of code.
Have to create a separate process every time for serving a new request So it must be a better solution that instead of creating a new process every tie from scratch we must have a short command using which we can do this logic.
Here fork command is system command using which the entire image of the process can be copied and we create a new process this idea help us to complete the creation of the new process with speed.
If we have n fork commands there are 2^n -1 child process.

##### Idea

After creating a process, we must have a mechanism to identify weather in newly created process which one is child and which is parent

##### Implementation

In general if fork return 0 then it is child and if fork return 1 then it is parent and then using a programmer level code we change the code of child process to behave as new process

**Advantages**
Now it is relatively easy to create and manage similar type of process
of repetitive nature with the help of fork command

**Disadvantages**
TO create a new process by fork command we have to do system call as
fork is a system function which is slow and time taking. Increase the
burden over Operating System

### Memory Management

Manages allocation and deallocation of physical memory space to various programs

The memory hiearchy system consits of all storage devices employed in a
computer system Register -\> Cache Memory -\> Main Memory -\> Magnetic
Disk Optical Disk

#### Locality of Reference

The references to memory at any give interval of time tend to be
confined within a few localized areas in memory. This phenomenon is
known as the property of locality of reference. There are two types of
locality of reference
![[Operating 2026-02-12 21.17.44.excalidraw]]
![[Operating 2026-02-12 21.12.35.excalidraw]]

##### Spatial Locality

Use of data elements in the nearby location s

##### Temporal Locality

Temporal locality refers to the reuse of specific data or resources,
within a relatively small time duration

#### Non Continuous Allocation Policy

Removal of external Fragment (Twice)
Slow, More space used, Internal Fragments

##### Paging

![[Operating 2026-02-12 22.25.46.excalidraw]]
Paging is memory management scheme that permits the physical address space of a process to be non contiguous.
Avoids external fragmentation.
Sizeof(Frame) = Sizeof(pages)

Page Table

- Data Structure in main memory
- Separate Page table for each process
- No (Page in process) = Len(page table)
- Sizeof(page table entry) = corresponding frame numbers

###### Translation Lookup Buffer

TLB is a associative, high speed memo![[Operating 2026-02-12 22.40.58.excalidraw]]
Translation look aside Buffer Hardware

$$
time = p_{hit} \times (t_{TLB} + t_{main-memory}) + (1 - p_{hit}) \times (t_{TLB} + 2 * t_{main-memory})
$$

Size of page proportional to Internal Fragmentation
Size of page inversely proportional to page table

Problem -
Context switch we have to refill TLB over some time.
We can also allocate some size for OS for system process.
Multiple TLB are costly.

###### Multilevel Paging

![[Operating 2026-02-12 22.55.09.excalidraw]]

Frame Allocation Algorithm

- Equal Allocation
- Proportional Weight $a(i) = s(i) / s ^ m$
- Working Set Check the last 10 references and count unique

###### Segmentation

- It is a memory management scheme that supports the separation of user's view of memory from actual physical.
- A logical addresss space is a collecction of segments
- Each with separation named and length
- Causes External Fragmentation
  ![[Operating 2026-02-12 23.06.49.excalidraw]]

###### Segmentation with paring

![[Operating 2026-02-12 23.14.45.excalidraw]]

#### Contingous Allocation Policy

We know that when a process is required to be executed. it must be loaded into main memory, by policy has two implication

- It must be loaded completely
- Must be stored in continguous fashion
  Main Memory Unit contains a relocation register which contains the base address of the process in the main memory and is added in the main memory and is added in logical address.

**Advantages**
Easy, Simple to use, simple to understand

**Disadvantage**
May Access address greater than maximum limit to recover from it add a limit register.

Compaction

- removes external fragmentation
- expensive
- Move process to give continous large space

![[Operating 2026-02-12 21.27.04.excalidraw]]

#### Space Allocation Methods

Internal Fragmentation is a function of fixed size which is either the same or larger than the request size then the unused space by the process in parition.rs
External Fragmentation is a function of contingous allocation policy. The space requested by the process is available but as it is not contingous cannot be allocated.

##### Variable Size Partitioning

Variable chuncks dynamically allocated
No Internal Fragmentation.
Causes External Fragmentation.
No Restriction on Process size.

##### Fixed Size Paritioning

Fixed partitoning but can be of same size or different size.
It cause Internal Fragments.

###### Various Policies

1. First Fit
   First partition which is capable of storing.
   Starts from Beginning
   Advantage - Simple, Easy to use, Understand
   Disadvantage - Poor performance, in time and space.

2. Best Fit
   Smallest partition which is capable of storing.
   Advantage - Best in fixed size
   Disadvantage - Difficult to implement, Worst performance, Remaining Space of very small size.

3. Worst Fit
   Allocate the Largest partition
   Advantage - Best in Variable size.
   Disadvantage - Worst in fixed size, Results in largest internal fragmentation

4. Next Fit
   Allocate the next request starting from current allocation
   Based on best fit.

#### Duty

Operating System is responsible fo Address Translation Convert Logical addresses to physical addresses to the retrieval.
Memory Allocation and Deallocation decide which process or components to laod or remove from memroy as needed.
Memory Tracking monitor which parts of memory are in use of processes.
Memory Protection implements safeguards to restrict unauthorized access to memory, ensuring both process isolation and data integrity.

#### Virtual Memory

To enbale multiprogramming and optimize memory, modern computing often uses pure demand paging to keep multiple processes in memory.
A process is thrashing if it spends more time paging than execution

##### Pure Demand Paging

A memeory mangement shcme where a process starts with no pages in memory.
Pages are only loaded when explicitly required during executino Proccess starts with zero pages in memoery.
Immediate page fault occurs Loads the needed page into memory.
Execution resumes after the required page is loaded into memoery Additional page faults occur as the process continues and requires a new pages Execution proceeds without further faults once all necessary pages are in memory.
The key principle is to only load pages when absolutely necessary.

##### Advantages

A program would no longer be constrained by the amount of physical memory that is avilable.
Allows the execution of processes that are not completely in main memory i.e process can be larger than main memory.
More programs could be run at the same time as use of main memory is less.

##### Disadvantages

Virtual memeory is not easy to implement It may substainally decrease performance if it is used carelessly (thrasing)

##### Implementation

we add a new column in page table, which have binary value 0 or invalid which means page is not currently in main memory,1 or valid which means page is currently in main memory

1.  Page fault
    When a process tries to access a page that is not in main memoery then a page fault occurs
    Valid Invalid bit - When the bit is valid the associated page is both legal and in memory.
    If bit is invalid the page is not valid or on the disk.

##### Steps to handle page fault

If the refernce was invalid, it means there is a page fault and page is not currently in main memory now we have to load this required page in main mameory.
We find a free frame if available we can brought in desired page, but if not we have to select a page as a victim and swap it out from main memory to secondary memory and then swap in the desired page.
We can reduce this overhead by using a modify bit or dirty bit as a new column in page tablehghj.
The modify bit for a page is set whenever the page has been modified.
In this case, we must write the page to the disk If the modify bit is not set It means the page has not been modified since it was into the ain memoery we need not write the memory page to the disk.
It is already there Effective access time for demand paging = (1-p) x ma + p x page fault service time

#### Page replacement Algorithms

##### First In First Out Page Replacement Algorithms

A FIFO replacement algorithm associates with each page, the time when that page was broght into memory.
When a page must be the oldest page is chosen.
ie the first page that came into the memory will be replaced first.
Belady anomlay for some page replacement algorithms the page fault rate may increase as number of allocated frames increases.

##### Optimal page replacment algorithm

Replace the page that will not be used for the longest period of time.
It has the lowest page fault rate of all algorithms Gurantees the lowest possible page fault rate for a fixed number of frames never suffere from belady anomaly.
Unformutaneu the optimal page replacement algorithm is difficult to implement as it requires future knowledge of the referene string.
it is mainly used for comparison.

##### least Recently used Page replacement Algorithm

We can think of this strategy as the optimal page replacement aglgorithm looking backward in time rather than forward.
rRplace the page that has not been used for the longest period time.
LRU is much better than FIFO replacement in terms of page fault.
THE LRU policy is often used in INdustry LRU also doesnt suffer from Belady\'s Anonaly.

#### Disk Management

Magnetic Disk serve as the main secondary storage computers.
Each Disk has a flat circular platter wiith magnetic surface for data storage.
A read write head hover on both the surfaces, moving in unision on a disk arm.
Platters have tracks divided into sectors for logical data storage.
Disk spin at speeds ranging from 60 to 250 rotations per second, commonly noted in RPM.

Total Transfer Time = Seek Time + Rotational Latency + Transfer time
Seek Time - It is a time taken by Read/ Write Header to reach the correct track.
Rotational Latency - It is the time taken by read write head during the wait for the correct sector.
IN general It is a random value so far average analysis we consieer the time taken by disk to complete half rottation
Transfer Time - It is the time taken by read write header either to read or write on a disk .
IN general, we assume that in 1 complete rotation, header can read or write the either track,
So total time will be = (File Size/ Track Size ) \* time taken to complete one revolution

##### Disk Scheduling

###### FCFS (First Come First Serve)

The simplest form of disk scheduling is first come first server algorithm.
IN FCFS, the requests are addressed in the order they arrive in the disk queue.
This algorithm is intrinsically fair but it generally does not provide the fastest service.

1.  Advantages
    Easy to understand easy to use Every request gets a fair chance No Starvation

2.  Disadvantages
    Does not try to optimize seek time, or waiting time

###### SSTF (Shortest Seek Time First)

Major Component in total transfer time is seek time, in order to reduce seek time if we service all the requests close to the current head position, this idea is the basis for the SSTF algorithm.
In SSTF, the requests nearest to the disk arm will get executed first requests having shortest seek time are executed first.
Although the SSTF algorithm is a substatntial improvement over the FCFS algorithm, it is not optimal.

1.  Advantages
    Seek Movement decreases Throughtput increases

2.  Disadvantages
    Overhead to calculate the closest request.
    Can cause starvation for a request which is far from the current location of the header.
    High variance of response time and waiting time as SSTF favors only closest requests.

###### SCAN / Elevator Algorithm

THe disk arm starts at one end of the disk and moves towards the other end, servicing requests as it reaches each track, until it gets to the other end of the disk.
At the other end, the direction of head movement is reversed and servicing the head continously scans bacck and forth across the disk

1.  Advantages
    Simple easy to understand and use No starvation but more wait for some random process

2.  Disadvantages
    Long waiting time for requests for locations just visited by disk arm Unnecessary move to the end of the disk, even if there is no requests.

###### CSCAN

Circular scan is a variant of SCAN designed to provide a more uniform wait time.
Like SCAN, C-SCAN moves the head from one end of the disk to the other, servicing requests along the way.
When the head reaches the other end, however it immediately returns to the beginning of the disk without servicing any request on the return trip

1.  Advantages
    Provides more uniform wait time compared to SCAN Better response time compared to SCAN

2.  Disadvantages
    More seeks movement in order to reach starting position

###### LOOK

It is similar to SCAN disk except the difference is that the disk arm in spite of going to the end of the disk goes only to the last request to be serviced in front of the head and then reverses its direction from there only.
Thus preventing extra delay for unnecessary traversal to the end of the disk

1.  Advantages
    Better performance compared ot SCAN SHould be used in case of less load

2.  Disadvantages
    Overhead to find the last request Should not be used in case of more load

###### CLOOK

It is similar to CSCAN.
In this the disk arm in spite of going to the end goes only to the last request to be serviced in front of the head and then from there goes to the other end\'s last request.
Thus, It also prevents the extra delay which occurred due to unnecessary traversal to the end of the disk.

1.  Advantages
    Provides more uniform waiti time compared to LOOk Better response time compared to look

2.  Disadvantages
    Overhead to find the last request and go to the inital position is more Should not be used in case of more load

### File Management

Manages files on storage devices, including their information naming permissions and hierarchy

#### File Allocation Methods

The main aim of file allocation problem is how disk space is utilised effectively and files can be accessed quickly.
Three major methods of allocating disk spaces are in wide use Each method has advantages and disadvantages, Although some system support all the three.
It is more common for a system to use one method for all files

#### Contingous,

It requires that each file occupy a set of contigouse blocks on the disk.
In directory usually we store three column file name, start dba and length in number of blocks DBA - Disk Block address

##### Advantages

Accessing a file that has been allocated contiguously is easy.
Thus, both sequential and direct access can be supported by contiguous allocations

##### Disadvantages

Suffer from huge amount of external fragmentation.
Another problem with contiguous allocation if file modifications.

#### Linked

With Linked allocation, each file is a linked list of disk blocks, the disk blocks may be scattered anywhere on the disk. The directory contains a pointer to the first and last blocks of the file

##### Advantages

To create read and write a new file is simply easy.
The size of a file need not be declared when the file is created.
A file can continue to grow as long as free blocks are available.
There is no external fragmentation with linked allocations and any free block on the list can be used to satisfy a request

##### Disadvantages

Only sequential access is possible, to find the it block of a file we must start and follow the pointers until we get to the the block.
Another disadvantage is the space required for the pointers so each file require slightly more space that it would otherwise

#### Indexed

Indexed allocation solves problems of contiguous and linked allocation by bringing all the pointers together into one location: the index block.
Then inside the block we have various types of pointers Direct Blocks, Single Indirect, Double Indirect and triple indirect.
Each file has an index block containing an array of disk block addresses.
The directory entry points to this index block.
When a file is created, all index block pointers are null.
Writing to the it block updates the corresponding index block entry with a block address from the free space manager.
The size of the index block is a trade off.
It should be small to save space but large enough to accommodate pointers to big files

##### Linked Scheme

To allow for large file we can link together several index blocks.
for example an index block might contain a small header giving the name of the file and a set of the first 100 disk block addresses.
the next address (the last word in the index block) is null or is a pointer to another index block (for a large file).

##### Combined Scheme

In UNIX based systems the file\'s inode stores the first 15 pointers from the index block.
the first 12 point directly to data blocks, eliminating the need for a separate index block for small files.
The next three pointers are for indirect block the first for a single indirect block, the second for a double indirect block and the last for a triple indirect block each increasingly in directing to the actual data blocks/

##### Advantages

Indexed allocation supports direct access, without suffering from external fragmentation, because any free block on the disk can satisfy a request for more space.

##### Disadvantage

Indexed allocation does suffer form wasted space.
the pointer overhead of the index block is generally greater than the pointer overhead of linked allocation.

#### Free Space Management

Since disk space is limited, we need to reuse the space from deleted files for new files if possible, to keep track of free disk space, the system maintains a free space list.
The free space list records all free disk blocks those not allocated to some file or directory.
To create a file, we search the free space list for the required amount of space and allocate that space to the new file.
This space is then removed from the free space list.
When a file is deleted, its disk space is added to the free space list.

##### Linked List

A approach to free space management is to link together all the free disk blocks, keeping a pointer to the first free block in a special location on the disk and caching it in memory.
This first block contains a pointer to the next free disk block and so on.
This scheme is not efficient, to traverse the list, we must read each block which require substantial IO time.
However operating system simply needs a free block so that it can allocate that block to a file, so the first block in the free lsit is used.

##### Bit Vector

Frequently the free space list is implemeted as a bit map or bit vector.
Each block is represented by 1 bit.
If the block is free, the bit is 1 if the block is allocated, the bit is 0.
The main advantage of this approach is its relative simplicity and its efficieny in finding the first free block or n consecutive free blocks on the disk.
But the bit vectors are inefficient unless the entire vector is kept in main memory.
Keeping it in the main memory is possible for smaller disks but not necessaryily for large ones.

#### File Organization

File organization refers to the way data is stored in a file.
File organization is very important because it determines the methods of access, efficiency, flexibility and storage devices to use.

#### Types of Organization

##### Sequential File Organization

Records are stored and accessed in a particular sorted order using key field.
Retrieval requires searching sequentially through entire file record by record to the end.

##### Random or direct File organization

Records are stored randomly but accessed directly.
To access a file which is stored randomly, a record key is used to determine where a records is stored on the storage media.
Magnetic and optical disks allow data to be stored and accessed randomly.

##### Serial File Organization

Records in a file are stored and accessed one after another.
This type of organization is mainly used on magnetic tapes.

##### Indexed sequential file organization methods

Almost similar to sequential method only that an index is used to enable the computer to locate individual records on the stage media

#### File Access methods

#### Direct Access

It is an alternative method for accessing a file which is based on the disk model of a file since disk allow random access to any block or a record of a file.
A file is viewed as a numbered sequence of blocks or records which are read written in an arbitary manner that is there is no restrictions on the order of recording or writing.
It is suitable for DBMS.

#### Sequential Access

It is the simplest access mechanism in which information is stored in a file are exists in an order such that one record is process after the other

#### Index Access

In this method and alternate index is created which contains key field and a pointer to the various blocks.
To find an entry in the file for a key value we first search the index and then use the pointer to directly access of the file and find the desired entry

#### Directory

It is similar to a folder in everyday terminoly and it exists within in a file system.
It a virtual container where multiple files and other directories called subdirectorires can reside.
It organized the file system in a hierarchical manner meaning directories can contain sub directories which may contain further subdirectorires and so on Operations on folders are Creation, Deletion, Renaming, Listing, Moving, Copying, Changing, Searching, sorting, Setting permission

#### Operations

Search for a file
Create new file
Delete a file
List a directory
Rename a file
Traverse the file

#### Types

1.  Single Level
    All the files are contained in same directory.
    Each file must have unique name.

2.  Two Level
    Create a directory for each user

3.  Tree Structural Directories
    Allows user to create their own sub directories and organize their files accordingly Path is the route from the root through all the sub directories to specified file.

4.  Acyclic Graph Directories
    Useful when the same files need to be accessed in more than one place in the directory structure.
    Files are shared by more than one user process

#### File system Structured

1.  Layered Files system
    Application program Logical file system File organization module
    Basic File system IO Control Devices

#### File

A file is a collection of related information defined by its creator.
In General file is a sequence of bits, bytes, lines or records.
Example -
Text file which is a sequence of characters organized into lines,
Source File sequence of subroutines or functions which are executable and are defined to work at a specific task,
Object File is a collection of words organized into loader record blocks.

#### Attributes

File attributes are the parameters used to keep track of file in operating system
Name - Human readable form it is the file name,
Identifier - Unique ID or target generally represented using number for uniquely identifying the files,
Type - File Type,
Location - Pointer to a device and location of file on the device,
Size - Current Size,
protection - Access Control information,
Time & Date,
User ID

#### Operations

Creating a file Writing a file Reading a file deleting a file Truncating a file Repositioning a file

#### File Allocation Methods

Allocate space to the files so that disk space is utilized in an efficient manner

#### Factors to consider

Processing Speed Ability to use multiple sector and multitrack transfer Disk space utilization Main Memory Requirement

#### Contiguous Allocation

Each file occupies a set of contiguous addresses on disk Linear ordering.
Location of a file is defined by the disk address of the first block and its length.
Both sequential and direct random access are supported

1.  Storage Allocation
    First Fit Allocate the first hole that is big enough.
    Best Fit allocate the smallest hole that is big enough.
    Worst Fit allocate the largest hole that is big enough

2.  Linked Allocation
    Solves all problem of contiguous allocation each file is a linked list of disk blocks.
    No external fragmentation Can be used only for sequential access file

3.  Indexed Allocation
    Solves the problem of linked allocation.
    In this all the pointers are brought together into one location called index block.
    Each file has its own index block.

#### File Access Methods

#### Sequential

Emulates magnetic tape operations One record is processed after other
Support - Read Next (Read 5 records and move pointer to next position),
Write next(Write and advance the position), rewind(Moving back to back),
skip n records

#### Direct

It is based on disk model. It allows random access.
User can jump to any record and access that record.
Supports - Read n, Write n, Jump to record n, Query current record

#### Indexed

Index is created which contains a key field and pointers to the various blocks.

### Security and Protection

Ensures system protections against unauthorised access and various security threats through authentication, authorisation and encryption

#### File Protection and Security

Are implemented to prevent interference with the use of files both logical and physical Protection threats to information that are internal Providing Mechanism for controlling the access to the program, Process, user to a resource Security deals with external threats Firewall and Encryption

#### Goals

Safe sharing of a common logical address space or common physical address space
Fair and reliable resource usage

#### Protection Domain

User Process Procedure

#### File System

It is a method of managing file inside a memory location
It's major types of NTFS, FAT32, ExFat

|               | FAT32                    | NTFS                               | ExFat                                                              |
| ------------- | ------------------------ | ---------------------------------- | ------------------------------------------------------------------ |
| Max File Size | 4GB                      | 16TB                               | 128 PiB                                                            |
| Security      | Less                     | More                               | Used in SD cards                                                   |
| Conversion    | Can be converted to NTFS | Can\'t be converted to FAT32       | Supported by all the windows version                               |
| Compression   | Can\'t Compress files    | Files can be optionally compressed | Used when files size or partition size is greater than FAT32 limit |
| Encryption    | Can\'t Encrypt Files     | Can Encrypt Files                  | Can Encrypt files                                                  |

#### FAT32

FAT32 stands for File Allocation Table 32.
It is a universal file system as it works with almost all the files system.
Size of files must be smaller than 4Gb Used in mostly in flash drives and pen drives

#### NTFS

NTFS stands for New Technology File System.
It was introduced with Windows.
They are used with windows OS.

#### ExFat

ExFat stands for Extended File Allocation Table.
It allows for 4GB and beyond file are also allowed

#### Ext2

Ext2 Stands for Extended2 File system.
It was introduced in 1993.
It will take a lots of time to load a system after a crash because it has no journalling system.
It does not have journalling feature.

#### Ext3

It stands for extended 3 file system.
It was introduced in 2001.
It does have journaling feature
