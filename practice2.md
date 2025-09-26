
# Problem 2 — House Alarm 🚪🪟

**Scenario:** The alarm is **silent** only when **neither** the door **nor** the window is open. (This demonstrates **De Morgan’s Law**.)

**Variables**

* `doorOpen` — front door open (true/false)
* `windowOpen` — window open (true/false)

**Condition (Boolean Expression)**

```
alarmSilent = NOT (doorOpen OR windowOpen)
```

**JavaScript form:**

```js
const alarmSilent = !(doorOpen || windowOpen);
// Equivalent by De Morgan: (!doorOpen && !windowOpen)
```

              |

### 📝 Student Template (Blank)

| doorOpen | windowOpen | (doorOpen OR windowOpen) | NOT(...) = alarmSilent |
| -------- | ---------- | ------------------------ | ---------------------- |
| true     | true       |                          |                        |
| true     | false      |                          |                        |
| false    | true       |                          |                        |
| false    | false      |                          |                        |

---