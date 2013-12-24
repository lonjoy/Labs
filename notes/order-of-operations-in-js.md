# JavaScript 中的运算顺序

<table>
    <tbody><tr>
        <th>Order</th>
        <th>Assoc</th>
        <th>Operator</th>
        <th>Summary</th>
    </tr>
    <tr class="odd">
        <td>1</td>
        <td>
            L<br>
            L<br>
            L<br>
            R
        </td>
        <td>
            .<br>
            []<br>
            ()<br>
            new
        </td>
        <td class="summary">
            Retrieve object property.<br>
            Array index or associative object property.<br>
            Function call.<br>
            Instantiate an object.
        </td>
    </tr>
    <tr class="even">
        <td>2</td>
        <td>
            R<br>
            R<br>
            R<br>
            R<br>
            R<br>
            R<br>
            R<br>
            R<br>
            R
        </td>
        <td>
            ++<br>
            --<br>
            -<br>
            +<br>
            ~<br>
            !<br>
            delete<br>
            typeof<br>
            void
        </td>
        <td class="summary">
            Pre- or post-increment. (unary)<br>
            Pre- or post-decrement. (unary)<br>
            Negation. (unary, NOT subtraction)<br>
            No operation, use numerical value. (unary, NOT addition)<br>
            Bitwise complement. (unary)<br>
            Logical complement. (unary)<br>
            Destroy an object property. (unary)<br>
            Return datatype. (unary)<br>
            Return undefined. (unary)
        </td>
    </tr>
    <tr class="odd">
        <td>3</td>
        <td>*, /, %</td>
        <td>L</td>
        <td class="summary">Multiply, divide, modulo (remainder)</td>
    </tr>
    <tr class="even">
        <td>4</td>
        <td>
            L<br>
            L
        </td>
        <td>
            +, -<br>
            +
        </td>
        <td class="summary">
            Add, subtract.<br>
            Concatenate strings.
        </td>
    </tr>
    <tr class="odd">
        <td>5</td>
        <td>
            L<br>
            L<br>
            L
        </td>
        <td>
            &lt;&lt;<br>
            &gt;&gt;<br>
            &gt;&gt;&gt;
        </td>
        <td class="summary">
            Shift left.<br>
            Shift right and extend sign.<br>
            Shift right and pad with zeroes.
        </td>
    </tr>
    <tr class="even">
        <td>6</td>
        <td>
            L<br>
            L<br>
            L<br>
            L
        </td>
        <td>
            &lt;, &lt;=<br>
            &gt;, &gt;=<br>
            instanceof<br>
            in
        </td>
        <td class="summary">
            Less than, less than or equal.<br>
            Greater than, greater than or equal.<br>
            Verify an object's constructor.<br>
            Verify an object's property exists.
        </td>
    </tr>
    <tr class="odd">
        <td>7</td>
        <td>
            L<br>
            L<br>
            L<br>
            L
        </td>
        <td>
            ==<br>
            !=<br>
            ===<br>
            !==
        </td>
        <td class="summary">
            Are operands equal?<br>
            Are operands NOT equal?<br>
            Are operands identical?<br>
            Are operands NOT identical?
        </td>
    </tr>
    <tr class="even">
        <td>8</td>
        <td>L</td>
        <td>&amp;</td>
        <td class="summary">Bitwise AND</td>
    </tr>
    <tr class="odd">
        <td>9</td>
        <td>L</td>
        <td>^</td>
        <td class="summary">Bitwise XOR</td>
    </tr>
    <tr class="even">
        <td>10</td>
        <td>L</td>
        <td>|</td>
        <td class="summary">Bitwise OR</td>
    </tr>
    <tr class="odd">
        <td>11</td>
        <td>L</td>
        <td>&amp;&amp;</td>
        <td class="summary">Local AND</td>
    </tr>
    <tr class="even">
        <td>12</td>
        <td>L</td>
        <td>||</td>
        <td class="summary">Local OR</td>
    </tr>
    <tr class="odd">
        <td>13</td>
        <td>R</td>
        <td>? :</td>
        <td class="summary">Conditional operator (ternary)</td>
    </tr>
    <tr class="even">
        <td>14</td>
        <td>
            R<br>
            R
        </td>
        <td>
            =<br>
            *=, /=, %=, +=, -=, &lt;&lt;=, <br>&gt;&gt;=, &gt;&gt;&gt;=, &amp;=, ^=, |=
        </td>
        <td class="summary">
            Assign value.<br>
            Perform operation, then assign value.
        </td>
    </tr>
    <tr class="odd">
        <td>15</td>
        <td>L</td>
        <td>, (comma)</td>
        <td class="summary">Multiple evaluation.</td>
    </tr>
</tbody></table>