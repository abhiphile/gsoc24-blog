import React from "react";
import Navbar from "../Navbar";
import Anchors from "../assets/Anchors";
import { Divider, Typography } from "antd";
import { FaCodePullRequest } from "react-icons/fa6";
import Footer from "../assets/Footer";
const { Title, Paragraph, Text, Link } = Typography;

const Week9 = () => {
  const code1 =
    `
  if not sys2:
    sys2 = TransferFunction(1, 1, sys1.var)

  if not isinstance(sys1, (TransferFunction, Series, StateSpace, Feedback)):
    raise TypeError("Unsupported type for sys1 in Feedback.")

  if not isinstance(sys2, (TransferFunction, Series, StateSpace, Feedback)):
    raise TypeError("Unsupported type for sys2 in Feedback.")

  if not (sys1.num_inputs == sys1.num_outputs == sys2.num_inputs ==
    sys2.num_outputs == 1):
    raise ValueError("""To use Feedback connection for MIMO systems
    use MIMOFeedback instead.""")
  `
  const code2 = `
if self.is_StateSpace_object:
  sys1_ss = self.sys1.doit().rewrite(StateSpace)
  sys2_ss = self.sys2.doit().rewrite(StateSpace)
  A1, B1, C1, D1 = sys1_ss.A, sys1_ss.B, sys1_ss.C, sys1_ss.D
  A2, B2, C2, D2 = sys2_ss.A, sys2_ss.B, sys2_ss.C, sys2_
  # Create identity matrices
  I_inputs = eye(self.num_inputs)
  I_outputs = eye(self.num_outp
  # Compute F and its inverse
  F = I_inputs - self.sign * D2 * D1
  E = F.i
  # Compute intermediate matrices
  E_D2 = E * D2
  E_C2 = E * C2
  T1 = I_outputs + self.sign * D1 * E_D2
  T2 = I_inputs + self.sign * E_D2 * D1
  A = Matrix.vstack(
  Matrix.hstack(A1 + self.sign * B1 * E_D2 * C1, self.sign * B1 * E_C2),
  Matrix.hstack(B2 * T1 * C1, A2 + self.sign * B2 * D1 * E_C2)
  )
  B = Matrix.vstack(B1 * T2, B2 * D1 * T2)
  C = Matrix.hstack(T1 * C1, self.sign * D1 * E_C2)
  D = D1 * T2
  return StateSpace(A, B, C, D)
  `
  const code3 = `
A1 = np.array([[4, 1], [2, -3]])  
B1 = np.array([[5, 2], [-3, -3]])  
C1 = np.array([[2, -4], [0, 1]])  
D1 = np.array([[3, 2], [1, -1]])  
A2 = np.array([[-3, 4, 2], [-1, -3, 0], [2, 5, 3]])  
B2 = np.array([[1, 4], [-3, -3], [-2, 1]])  
C2 = np.array([[4, 2, -3], [1, 4, 3]])  
D2 = np.array([[-2, 4], [0, 1]])
ss1 = control.ss(A1, B1, C1, D1)
ss2 = control.ss(A2, B2, C2, D2)
ss1.feedback(ss2)

>>> print(ss1.feedback(ss2))
<StateSpace>: sys[2]
Inputs (2): ['u[0]', 'u[1]']
Outputs (2): ['y[0]', 'y[1]']
States (5): ['x[0]', 'x[1]', 'x[2]', 'x[3]', 'x[4]']

A = [[  3.     -0.75   -3.75  -18.5   -15.   ]
     [  3.5    -4.875   1.125   9.75    9.   ]
     [  3.    -10.25  -11.25  -25.5   -19.   ]
     [ -4.5    16.125   9.125  42.75   36.   ]
     [ -1.5     5.875   3.875  21.25   18.   ]]

B = [[ -0.25    4.75 ]
     [  0.375  -2.625]
     [  0.25    7.25 ]
     [  0.375 -11.625]
     [  0.625  -4.375]]

C = [[  1.     -3.75   -1.75  -10.5    -9.   ]
     [  0.5    -1.625  -1.625  -4.75   -3.   ]]

D = [[-0.25   2.75 ]
     [ 0.125  1.125]]
`
  const code4 = `
    >>> A1 = Matrix([[4, 1], [2, -3]])
    >>> B1 = Matrix([[5, 2], [-3, -3]])
    >>> C1 = Matrix([[2, -4], [0, 1]])
    >>> D1 = Matrix([[3, 2], [1, -1]])
    >>> A2 = Matrix([[-3, 4, 2], [-1, -3, 0], [2, 5, 3]])
    >>> B2 = Matrix([[1, 4], [-3, -3], [-2, 1]])
    >>> C2 = Matrix([[4, 2, -3], [1, 4, 3]])
    >>> D2 = Matrix([[-2, 4], [0, 1]])
    >>> ss1 = StateSpace(A1, B1, C1, D1)
    >>> ss2 = StateSpace(A2, B2, C2, D2)
    >>> F1 = MIMOFeedback(ss1, ss2)
    >>> F1
    MIMOFeedback(StateSpace(Matrix([
    [4,  1],
    [2, -3]]), Matrix([
    [ 5,  2],
    [-3, -3]]), Matrix([
    [2, -4],
    [0,  1]]), Matrix([
    [3,  2],
    [1, -1]])), StateSpace(Matrix([
    [-3,  4, 2],
    [-1, -3, 0],
    [ 2,  5, 3]]), Matrix([
    [ 1,  4],
    [-3, -3],
    [-2,  1]]), Matrix([
    [4, 2, -3],
    [1, 4,  3]]), Matrix([
    [-2, 4],
    [ 0, 1]])), -1)
    doit() can be used to find StateSpace equivalent for the system containing StateSpace objects.
    >>> F1.doit()
    StateSpace(Matrix([
    [   3,  -3/4, -15/4, -37/2, -15],
    [ 7/2, -39/8,   9/8,  39/4,   9],
    [   3, -41/4, -45/4, -51/2, -19],
    [-9/2, 129/8,  73/8, 171/4,  36],
    [-3/2,  47/8,  31/8,  85/4,  18]]), Matrix([
    [-1/4,  19/4],
    [ 3/8, -21/8],
    [ 1/4,  29/4],
    [ 3/8, -93/8],
    [ 5/8, -35/8]]), Matrix([
    [  1, -15/4,  -7/4, -21/2, -9],
    [1/2, -13/8, -13/8, -19/4, -3]]), Matrix([
    [-1/4, 11/4],
    [ 1/8,  9/8]]))
`
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-xs-12">
          <Anchors />
        </div>
        <div className="col m-2">
          <div className="m-2 border rounded p-4">
            <Typography>
              <Title>
                Week 9: Added Feedback interconnection for <code>StateSpace</code> model.
              </Title>
              <Paragraph className='par'>
                During the 9th week of my GSoc I've worked on Feedback interconnection of StateSpace class.
                It was a difficult task as I need to closely moniter every step where the code was breaking.
              </Paragraph>
              <Title>
                Implementation
              </Title>
              <Paragraph className='par'>
                <h2>For SISO systems</h2>
                <p>
                  I've changed the parent class of Feedback which is for SISO from <code>TransferFunction</code> to <code>SISOLinearTimeInvariant.</code>
                  It was done so that SISO <code>StateSpace</code> systems can be connected easily.
                  I made some changes by adding a new property to all the interconnection type of objects which is <code>is_StateSpace_object</code>.
                  This makes sure that the <code>StateSpace</code> objects is treated differently from the connection containing `s` or the Laplace Transform variable.
                </p>
                <p>
                  Here I made sure that <code>doit()</code> should return the equivalent StateSpace model if the object is a <code>StateSpace</code> type.
                </p>
                <h2>
                  For MIMO Systems
                </h2>
                <p>
                  I've used proper type checking to make sure that the user gets correct message if the user tries to connect unsupported systems.
                  <pre>
                    {code1}
                  </pre>
                  For using <code>doit()</code> I've used a very complex logic which took me a lot of time to understand. I've referenced it from `python-control`
                  <pre>{code2}</pre>
                  This code snippet follows the following steps :
                  <ul>
                    <li>The algorithm first converts two systems (sys1 and sys2) into their StateSpace representations. These systems are defined by matrices <code>A, B, C and D</code>which describe the dynamics and outputs of the system.</li>
                    <li>It then creates identity matrices and computes an intermediate matrix F, along with its inverse E. These matrices help manage interactions between the two systems. The algorithm uses these to calculate intermediate matrices that simplify combining the two systems.</li>
                    <li>Finally, the algorithm calculates the new combined StateSpace representation by stacking and multiplying the matrices. This results in a new system that incorporates the dynamics of both original systems, effectively creating a new, combined StateSpace system.</li>
                  </ul>
                  <h2>Testing</h2>
                  For testing I've used python-control I've validated everything using it and made test cases for sympy using it. An example for it is
                  <h3>Python Control Test</h3>
                  <pre>{code3}</pre>
                  <h3>Sympy Code</h3>
                  <pre>{code4}</pre>
                  <h2>Refrences</h2>
                  <ol>
                    <li>
                        <a href="https://python-control.readthedocs.io/en/latest/generated/control.InterconnectedSystem.html#control.InterconnectedSystem.feedback">Python Control</a>
                    </li>
                  </ol>
                </p>
              </Paragraph>
              <Title>
                Pull Requests
              </Title>
              <Paragraph className='par'>
                <a href='https://github.com/sympy/sympy/pull/26863' className='text-success'><FaCodePullRequest /> (Open) Added support of Feedback to work with StateSpace.</a>
                <div className='gap-3'>
                  <Divider />
                </div>
                Abhishek Kumar
                <br />
                GSoC Contributor
              </Paragraph>
            </Typography>

          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Week9;
