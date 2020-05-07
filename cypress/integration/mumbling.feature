Feature: Cat Mumbling

    Scenario Outline: Mumbling
        Given the mumbling app in QA
        When I insert the word <string>
        Then I will get <result>

        Examples:
            | string   | result                                      |
            | abcd     | A-Bb-Ccc-Dddd                               |
            | ZSgFJkhj | Z-Ss-Ggg-Ffff-Jjjjj-Kkkkkk-Hhhhhhh-Jjjjjjjj |
            | 123      | Invalid Input                               |
            | £$"      | Invalid Input                               |
            | av by    | Invalid Input                               |