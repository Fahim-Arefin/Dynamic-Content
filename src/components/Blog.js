function Blog({ setIsDisplayBlog }) {
  return (
    <div className="container mx-auto my-12 space-y-4">
      <h1 className="text-center text-[#FF1F3D] text-4xl font-bold mb-12">
        Blog Content
      </h1>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked="checked" />
        <div className="collapse-title text-2xl font-bold text-[#121212]">
          What are the scope of var, let, and const ?
        </div>
        <div className="collapse-content text-sm text-gray-600 space-y-2">
          <p>
            In JavaScript, when you use var to declare a variable, it's like
            saying that this variable can be seen and used everywhere inside the
            function where it's created. If you put it outside of any function,
            it's like shouting to the entire code that everyone can use this
            variable, which can cause problems.It basically hoisted and can
            access from entire function.
          </p>
          <p>
            But with let and const, it's more like putting a fence around your
            variable. It only works within the part of the code (block) where
            you put it. let is for variables that can change, like a switch you
            can turn on and off.
          </p>
          <p>
            Const is for things that should never change, like a sign that
            always says the same thing. These new ways of declaring variables
            help keep your code neat and prevent mix-ups, which is why most
            people like to use them in modern JavaScript.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-2xl font-bold text-[#121212]">
          What are the use cases of null and undefined ?
        </div>
        <div className="collapse-content text-sm text-gray-600 space-y-2">
          <p>
            In JavaScript, both 'null' and 'undefined' are used to represent the
            absence of a value, but they have distinct use cases.
          </p>
          <p>
            'null' is typically employed when you want to explicitly indicate
            that a variable or object property should have no value or is
            intentionally empty. It's often used for initialization or to reset
            a variable. On the other hand, 'undefined' is usually the default
            value for uninitialized variables and is automatically assigned to
            variables that have been declared but haven't been assigned a value
            yet. It can also be the result of accessing object properties or
            variables that don't exist.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-2xl font-bold text-[#121212]">
          What do you mean by REST API?
        </div>
        <div className="collapse-content text-sm text-gray-600 space-y-2">
          <p>
            A REST API (Representational State Transfer Application Programming
            Interface) is a software architectural style for designing networked
            applications. It uses a set of principles and constraints to
            facilitate communication between clients and servers over the
            internet. REST APIs rely on standard HTTP methods, such as GET
            (retrieve data), POST (create data), PUT (update data), and DELETE
            (remove data), to perform operations on resources identified by
            unique URIs (Uniform Resource Identifiers). Key features include
            statelessness, a client-server architecture, a uniform interface,
            resource-based interactions, and the use of multiple representations
            (e.g., JSON or XML). REST APIs are commonly used to build scalable
            and interoperable web services and applications.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="px-4 py-2 text-white rounded-md bg-[#FF1F3D] hover:bg-[#DF1F3DFF] active:bg-[#BF1F3DFF] "
          type="text"
          onClick={() => setIsDisplayBlog(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Blog;
