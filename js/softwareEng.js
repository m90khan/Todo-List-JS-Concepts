/*
Topic: Software Engineering

- SE is an process of combining tools, methods and standard operations to product quality softwares within given constraints.

* Software Process: 
- Breaking down the software complexity into systematic smaller pieces
- using formal techniques on how will the software will be developed.

* FOUR SOFTWARE PROCESSES
- WATERFALL : one phase to the other , follows the flow
- Evolutionary Prototyping: start with intial and develop based on customer feedback
- Unified Software Process: heavily based on UML
- AGILE: flexible in development, changes in requirements

Topic: Software Phases
- Requirements Engineering
- Design (High level Structure)
- Implementation
- Verification and Validation
- Maintanenece

* Tools
- IDE, VCS (GIT) , Coverage and Verification Tools

* Software Lifecycle
- Software Lifecycle : sequence of decisions that determine the history of your software
- There are many models in which you can make decisions that better fulfill requirments. 

* Requirments Engineering : iterative process
- RE is the process of establishing the needs of stakeholders that are to be solved by software

-1- Elicitation: Colelction of reuirments from stakeholders
-2- Analysis: deeper understanding of requirments
-3- Specification: REQ are organized so to be shared
-4- Validation: validate reqs, that they are complete, consistent, non-redundant
-5- Management: Accounts of changes to the requirments during the entire development process

* Software Design
- software requirements are analyses to describe the inner structure of the organization 
- the description will server as a basis of teh actual system. has series of design phases.

- Architectural Design -> Abstract Specification -> Interface Design
-> Component Design -> Data Structure -> Algorithm Design
-(we go from high level design system to a low-level)

* Implementation
- Realize the design system and proceed with implementation

- Reduction of Complexity
- Anticipation of Diversity: to anticipate that Software could change during ddevelopment
- Structure Validation: easy testable software
- agrees with internal or external standards


* Validation and Verification
- validation the system concurrent with requirments
- verification: is the developed software is correctly build



* WRSPM MODEL 

- Requirements Definition
Requirements define the problem at hand. In this step we are trying to find out the "what". We are NOT trying to find out the "how". 
This means we want to come up with a set of goals the system should be able to do, but not try to figure out how to accomplish these goals.

For example, let's say we have the problem of needing a form to track financial transactions. In the requirements we might look to define what 
exactly this form should track. Maybe we need a name, date, amount, and bank account field. From there, it needs to be stored into a database. 
These would all be requirements. We don't however need to figure out the best way to do any of that. Those questions are for the design phase.

So to reiterate, requirements are just to define the problem. It's the phase where we come up with a common set of goals that we are working towards. 
The requirements will constantly be looked at through production to make sure the product being built is actually solving the original problem.

- Requirements vs Specifications
Within the requirements phase, we also look at something called specifications. Specifications are in essence "technical requirements".
They are used to define the problem in terms of the technical constraints.

By constraints, I mean limitations, or implementations that must happen. For example, if a client only uses MySQL databases, then we have to 
use a MySQL database as well. This isn't a design choice, it's something that must happen, therefore it goes into requirements.

Requirements - A non-technical definition of something that is required from the system.

Specifications - A technical definition of what is required from the system.

With requirements, we are trying to keep it simple. We don't want to use any technical jargon. It should be understood by just about anyone. 
Something very simple like "Should record bank account information" is good.

With specifications, we can be a little more exact, and use some technical jargon. We still want to keep it as simple as possible though. 
"Encrypt the bank account information with at-least a AES 256 standard".  Again, we are NOT trying to design it here. We aren't going into the specifics, 
just saying the technical standard by which we need to meet. We will come up with how to do this, which encryption to actually use, etc. in the design phase.

- Non-Functional vs Functional
There is one final area of organization we can add onto our requirements. This is the idea between functional, and non-functional requirements.

Functional - Functional requirements are requirements which pertain to the function of the system.

Non-Functional - Non-Functional requirements are requirements which cover areas that don't directly effect the function of the program.

Functional requirements are pretty straightforward and easy to create. All we have to ask is "what should the program do?". 
Any answers to this question are functional requirements.

For example: the system should collect user information, the system should provide a cart system for collecting items, the system should provide
 a way to rate and review different products. These are all functional requirements. They detail the way the program should function.

Non-functional however are a little bit trickier. They are typically constraints. These constraints might be implemented by the government 
(safety regulations), the company (quality regulations), or the client. They are things we have to follow, but don't directly pertain to the function of the program.

An example of a non-functional requirement would be that the program must be coded in Java. This requirement might come from the client,
 so it's easy to maintain by their engineers who only know Java. This doesn't describe the functional of the program at all. It will still 
 do exactly the same thing in any programming language. This makes it a non-functional requirement.

There are different categories of non-functional requirements to make it a little bit easier. These categories are product, organizational, and external.

Product - Must have behaviors of the product (referring to the code, servers, etc). Example: Product must be coded in Java. Product must use Microsoft based servers.

Organizational - Company policies, standards, styles, rules, etc. Example: The project will be developed using scrum. Every function must be documented.

External - External laws, regulations, trends, etc. Product must use SSL due to European law XYZ. Product should use new technique of XYZ to collect data.
*/
