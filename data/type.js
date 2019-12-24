const pokemonType = [
1, 12,
1, 4,
2, 12,
2, 4,
3, 12,
3, 4,
4, 10,
5, 10,
6, 10,
6, 3,
7, 11,
8, 11,
9, 11,
10, 7,
11, 7,
12, 7,
12, 3,
13, 7,
13, 4,
14, 7,
14, 4,
15, 7,
15, 4,
16, 1,
16, 3,
17, 1,
17, 3,
18, 1,
18, 3,
19, 1,
20, 1,
21, 1,
21, 3,
22, 1,
22, 3,
23, 4,
24, 4,
25, 13,
26, 13,
27, 5,
28, 5,
29, 4,
30, 4,
31, 4,
31, 5,
32, 4,
33, 4,
34, 4,
34, 5,
35, 18,
36, 18,
37, 10,
38, 10,
39, 1,
39, 18,
40, 1,
40, 18,
41, 4,
41, 3,
42, 4,
42, 3,
43, 12,
43, 4,
44, 12,
44, 4,
45, 12,
45, 4,
46, 7,
46, 12,
47, 7,
47, 12,
48, 7,
48, 4,
49, 7,
49, 4,
50, 5,
51, 5,
52, 1,
53, 1,
54, 11,
55, 11,
56, 2,
57, 2,
58, 10,
59, 10,
60, 11,
61, 11,
62, 11,
62, 2,
63, 14,
64, 14,
65, 14,
66, 2,
67, 2,
68, 2,
69, 12,
69, 4,
70, 12,
70, 4,
71, 12,
71, 4,
72, 11,
72, 4,
73, 11,
73, 4,
74, 6,
74, 5,
75, 6,
75, 5,
76, 6,
76, 5,
77, 10,
78, 10,
79, 11,
79, 14,
80, 11,
80, 14,
81, 13,
81, 9,
82, 13,
82, 9,
83, 1,
83, 3,
84, 1,
84, 3,
85, 1,
85, 3,
86, 11,
87, 11,
87, 15,
88, 4,
89, 4,
90, 11,
91, 11,
91, 15,
92, 8,
92, 4,
93, 8,
93, 4,
94, 8,
94, 4,
95, 6,
95, 5,
96, 14,
97, 14,
98, 11,
99, 11,
100, 13,
101, 13,
102, 12,
102, 14,
103, 12,
103, 14,
104, 5,
105, 5,
106, 2,
107, 2,
108, 1,
109, 4,
110, 4,
111, 5,
111, 6,
112, 5,
112, 6,
113, 1,
114, 12,
115, 1,
116, 11,
117, 11,
118, 11,
119, 11,
120, 11,
121, 11,
121, 14,
122, 14,
122, 18,
123, 7,
123, 3,
124, 15,
124, 14,
125, 13,
126, 10,
127, 7,
128, 1,
129, 11,
130, 11,
130, 3,
131, 11,
131, 15,
132, 1,
133, 1,
134, 11,
135, 13,
136, 10,
137, 1,
138, 6,
138, 11,
139, 6,
139, 11,
140, 6,
140, 11,
141, 6,
141, 11,
142, 6,
142, 3,
143, 1,
144, 15,
144, 3,
145, 13,
145, 3,
146, 10,
146, 3,
147, 16,
148, 16,
149, 16,
149, 3,
150, 14,
151, 14,
152, 12,
153, 12,
154, 12,
155, 10,
156, 10,
157, 10,
158, 11,
159, 11,
160, 11,
161, 1,
162, 1,
163, 1,
163, 3,
164, 1,
164, 3,
165, 7,
165, 3,
166, 7,
166, 3,
167, 7,
167, 4,
168, 7,
168, 4,
169, 4,
169, 3,
170, 11,
170, 13,
171, 11,
171, 13,
172, 13,
173, 18,
174, 1,
174, 18,
175, 18,
176, 18,
176, 3,
177, 14,
177, 3,
178, 14,
178, 3,
179, 13,
180, 13,
181, 13,
182, 12,
183, 11,
183, 18,
184, 11,
184, 18,
185, 6,
186, 11,
187, 12,
187, 3,
188, 12,
188, 3,
189, 12,
189, 3,
190, 1,
191, 12,
192, 12,
193, 7,
193, 3,
194, 11,
194, 5,
195, 11,
195, 5,
196, 14,
197, 17,
198, 17,
198, 3,
199, 11,
199, 14,
200, 8,
201, 14,
202, 14,
203, 1,
203, 14,
204, 7,
205, 7,
205, 9,
206, 1,
207, 5,
207, 3,
208, 9,
208, 5,
209, 18,
210, 18,
211, 11,
211, 4,
212, 7,
212, 9,
213, 7,
213, 6,
214, 7,
214, 2,
215, 17,
215, 15,
216, 1,
217, 1,
218, 10,
219, 10,
219, 6,
220, 15,
220, 5,
221, 15,
221, 5,
222, 11,
222, 6,
223, 11,
224, 11,
225, 15,
225, 3,
226, 11,
226, 3,
227, 9,
227, 3,
228, 17,
228, 10,
229, 17,
229, 10,
230, 11,
230, 16,
231, 5,
232, 5,
233, 1,
234, 1,
235, 1,
236, 2,
237, 2,
238, 15,
238, 14,
239, 13,
240, 10,
241, 1,
242, 1,
243, 13,
244, 10,
245, 11,
246, 6,
246, 5,
247, 6,
247, 5,
248, 6,
248, 17,
249, 14,
249, 3,
250, 10,
250, 3,
251, 14,
251, 12,
252, 12,
253, 12,
254, 12,
255, 10,
256, 10,
256, 2,
257, 10,
257, 2,
258, 11,
259, 11,
259, 5,
260, 11,
260, 5,
261, 17,
262, 17,
263, 1,
264, 1,
265, 7,
266, 7,
267, 7,
267, 3,
268, 7,
269, 7,
269, 4,
270, 11,
270, 12,
271, 11,
271, 12,
272, 11,
272, 12,
273, 12,
274, 12,
274, 17,
275, 12,
275, 17,
276, 1,
276, 3,
277, 1,
277, 3,
278, 11,
278, 3,
279, 11,
279, 3,
280, 14,
280, 18,
281, 14,
281, 18,
282, 14,
282, 18,
283, 7,
283, 11,
284, 7,
284, 3,
285, 12,
286, 12,
286, 2,
287, 1,
288, 1,
289, 1,
290, 7,
290, 5,
291, 7,
291, 3,
292, 7,
292, 8,
293, 1,
294, 1,
295, 1,
296, 2,
297, 2,
298, 1,
298, 18,
299, 6,
300, 1,
301, 1,
302, 17,
302, 8,
303, 9,
303, 18,
304, 9,
304, 6,
305, 9,
305, 6,
306, 9,
306, 6,
307, 2,
307, 14,
308, 2,
308, 14,
309, 13,
310, 13,
311, 13,
312, 13,
313, 7,
314, 7,
315, 12,
315, 4,
316, 4,
317, 4,
318, 11,
318, 17,
319, 11,
319, 17,
320, 11,
321, 11,
322, 10,
322, 5,
323, 10,
323, 5,
324, 10,
325, 14,
326, 14,
327, 1,
328, 5,
329, 5,
329, 16,
330, 5,
330, 16,
331, 12,
332, 12,
332, 17,
333, 1,
333, 3,
334, 16,
334, 3,
335, 1,
336, 4,
337, 6,
337, 14,
338, 6,
338, 14,
339, 11,
339, 5,
340, 11,
340, 5,
341, 11,
342, 11,
342, 17,
343, 5,
343, 14,
344, 5,
344, 14,
345, 6,
345, 12,
346, 6,
346, 12,
347, 6,
347, 7,
348, 6,
348, 7,
349, 11,
350, 11,
351, 1,
352, 1,
353, 8,
354, 8,
355, 8,
356, 8,
357, 12,
357, 3,
358, 14,
359, 17,
360, 14,
361, 15,
362, 15,
363, 15,
363, 11,
364, 15,
364, 11,
365, 15,
365, 11,
366, 11,
367, 11,
368, 11,
369, 11,
369, 6,
370, 11,
371, 16,
372, 16,
373, 16,
373, 3,
374, 9,
374, 14,
375, 9,
375, 14,
376, 9,
376, 14,
377, 6,
378, 15,
379, 9,
380, 16,
380, 14,
381, 16,
381, 14,
382, 11,
383, 5,
384, 16,
384, 3,
385, 9,
385, 14,
386, 14,
387, 12,
388, 12,
389, 12,
389, 5,
390, 10,
391, 10,
391, 2,
392, 10,
392, 2,
393, 11,
394, 11,
395, 11,
395, 9,
396, 1,
396, 3,
397, 1,
397, 3,
398, 1,
398, 3,
399, 1,
400, 1,
400, 11,
401, 7,
402, 7,
403, 13,
404, 13,
405, 13,
406, 12,
406, 4,
407, 12,
407, 4,
408, 6,
409, 6,
410, 6,
410, 9,
411, 6,
411, 9,
412, 7,
413, 7,
413, 12,
414, 7,
414, 3,
415, 7,
415, 3,
416, 7,
416, 3,
417, 13,
418, 11,
419, 11,
420, 12,
421, 12,
422, 11,
423, 11,
423, 5,
424, 1,
425, 8,
425, 3,
426, 8,
426, 3,
427, 1,
428, 1,
429, 8,
430, 17,
430, 3,
431, 1,
432, 1,
433, 14,
434, 4,
434, 17,
435, 4,
435, 17,
436, 9,
436, 14,
437, 9,
437, 14,
438, 6,
439, 14,
439, 18,
440, 1,
441, 1,
441, 3,
442, 8,
442, 17,
443, 16,
443, 5,
444, 16,
444, 5,
445, 16,
445, 5,
446, 1,
447, 2,
448, 2,
448, 9,
449, 5,
450, 5,
451, 4,
451, 7,
452, 4,
452, 17,
453, 4,
453, 2,
454, 4,
454, 2,
455, 12,
456, 11,
457, 11,
458, 11,
458, 3,
459, 12,
459, 15,
460, 12,
460, 15,
461, 17,
461, 15,
462, 13,
462, 9,
463, 1,
464, 5,
464, 6,
465, 12,
466, 13,
467, 10,
468, 18,
468, 3,
469, 7,
469, 3,
470, 12,
471, 15,
472, 5,
472, 3,
473, 15,
473, 5,
474, 1,
475, 14,
475, 2,
476, 6,
476, 9,
477, 8,
478, 15,
478, 8,
479, 13,
479, 8,
480, 14,
481, 14,
482, 14,
483, 9,
483, 16,
484, 11,
484, 16,
485, 10,
485, 9,
486, 1,
487, 8,
487, 16,
488, 14,
489, 11,
490, 11,
491, 17,
492, 12,
493, 1,
494, 14,
494, 10,
495, 12,
496, 12,
497, 12,
498, 10,
499, 10,
499, 2,
500, 10,
500, 2,
501, 11,
502, 11,
503, 11,
504, 1,
505, 1,
506, 1,
507, 1,
508, 1,
509, 17,
510, 17,
511, 12,
512, 12,
513, 10,
514, 10,
515, 11,
516, 11,
517, 14,
518, 14,
519, 1,
519, 3,
520, 1,
520, 3,
521, 1,
521, 3,
522, 13,
523, 13,
524, 6,
525, 6,
526, 6,
527, 14,
527, 3,
528, 14,
528, 3,
529, 5,
530, 5,
530, 9,
531, 1,
532, 2,
533, 2,
534, 2,
535, 11,
536, 11,
536, 5,
537, 11,
537, 5,
538, 2,
539, 2,
540, 7,
540, 12,
541, 7,
541, 12,
542, 7,
542, 12,
543, 7,
543, 4,
544, 7,
544, 4,
545, 7,
545, 4,
546, 12,
546, 18,
547, 12,
547, 18,
548, 12,
549, 12,
550, 11,
551, 5,
551, 17,
552, 5,
552, 17,
553, 5,
553, 17,
554, 10,
555, 10,
556, 12,
557, 7,
557, 6,
558, 7,
558, 6,
559, 17,
559, 2,
560, 17,
560, 2,
561, 14,
561, 3,
562, 8,
563, 8,
564, 11,
564, 6,
565, 11,
565, 6,
566, 6,
566, 3,
567, 6,
567, 3,
568, 4,
569, 4,
570, 17,
571, 17,
572, 1,
573, 1,
574, 14,
575, 14,
576, 14,
577, 14,
578, 14,
579, 14,
580, 11,
580, 3,
581, 11,
581, 3,
582, 15,
583, 15,
584, 15,
585, 1,
585, 12,
586, 1,
586, 12,
587, 13,
587, 3,
588, 7,
589, 7,
589, 9,
590, 12,
590, 4,
591, 12,
591, 4,
592, 11,
592, 8,
593, 11,
593, 8,
594, 11,
595, 7,
595, 13,
596, 7,
596, 13,
597, 12,
597, 9,
598, 12,
598, 9,
599, 9,
600, 9,
601, 9,
602, 13,
603, 13,
604, 13,
605, 14,
606, 14,
607, 8,
607, 10,
608, 8,
608, 10,
609, 8,
609, 10,
610, 16,
611, 16,
612, 16,
613, 15,
614, 15,
615, 15,
616, 7,
617, 7,
618, 5,
618, 13,
619, 2,
620, 2,
621, 16,
622, 5,
622, 8,
623, 5,
623, 8,
624, 17,
624, 9,
625, 17,
625, 9,
626, 1,
627, 1,
627, 3,
628, 1,
628, 3,
629, 17,
629, 3,
630, 17,
630, 3,
631, 10,
632, 7,
632, 9,
633, 17,
633, 16,
634, 17,
634, 16,
635, 17,
635, 16,
636, 7,
636, 10,
637, 7,
637, 10,
638, 9,
638, 2,
639, 6,
639, 2,
640, 12,
640, 2,
641, 3,
642, 13,
642, 3,
643, 16,
643, 10,
644, 16,
644, 13,
645, 5,
645, 3,
646, 16,
646, 15,
647, 11,
647, 2,
648, 1,
648, 14,
649, 7,
649, 9,
650, 12,
651, 12,
652, 12,
652, 2,
653, 10,
654, 10,
655, 10,
655, 14,
656, 11,
657, 11,
658, 11,
658, 17,
659, 1,
660, 1,
660, 5,
661, 1,
661, 3,
662, 10,
662, 3,
663, 10,
663, 3,
664, 7,
665, 7,
666, 7,
666, 3,
667, 10,
667, 1,
668, 10,
668, 1,
669, 18,
670, 18,
671, 18,
672, 12,
673, 12,
674, 2,
675, 2,
675, 17,
676, 1,
677, 14,
678, 14,
679, 9,
679, 8,
680, 9,
680, 8,
681, 9,
681, 8,
682, 18,
683, 18,
684, 18,
685, 18,
686, 17,
686, 14,
687, 17,
687, 14,
688, 6,
688, 11,
689, 6,
689, 11,
690, 4,
690, 11,
691, 4,
691, 16,
692, 11,
693, 11,
694, 13,
694, 1,
695, 13,
695, 1,
696, 6,
696, 16,
697, 6,
697, 16,
698, 6,
698, 15,
699, 6,
699, 15,
700, 18,
701, 2,
701, 3,
702, 13,
702, 18,
703, 6,
703, 18,
704, 16,
705, 16,
706, 16,
707, 9,
707, 18,
708, 8,
708, 12,
709, 8,
709, 12,
710, 8,
710, 12,
711, 8,
711, 12,
712, 15,
713, 15,
714, 3,
714, 16,
715, 3,
715, 16,
716, 18,
717, 17,
717, 3,
718, 16,
718, 5,
719, 6,
719, 18,
720, 14,
720, 8,
721, 10,
721, 11,
722, 12,
722, 3,
723, 12,
723, 3,
724, 12,
724, 8,
725, 10,
726, 10,
727, 10,
727, 17,
728, 11,
729, 11,
730, 11,
730, 18,
731, 1,
731, 3,
732, 1,
732, 3,
733, 1,
733, 3,
734, 1,
735, 1,
736, 7,
737, 7,
737, 13,
738, 7,
738, 13,
739, 2,
740, 2,
740, 15,
741, 10,
741, 3,
742, 7,
742, 18,
743, 7,
743, 18,
744, 6,
745, 6,
746, 11,
747, 4,
747, 11,
748, 4,
748, 11,
749, 5,
750, 5,
751, 11,
751, 7,
752, 11,
752, 7,
753, 12,
754, 12,
755, 12,
755, 18,
756, 12,
756, 18,
757, 4,
757, 10,
758, 4,
758, 10,
759, 1,
759, 2,
760, 1,
760, 2,
761, 12,
762, 12,
763, 12,
764, 18,
765, 1,
765, 14,
766, 2,
767, 7,
767, 11,
768, 7,
768, 11,
769, 8,
769, 5,
770, 8,
770, 5,
771, 11,
772, 1,
773, 1,
774, 6,
774, 3,
775, 1,
776, 10,
776, 16,
777, 13,
777, 9,
778, 8,
778, 18,
779, 11,
779, 14,
780, 1,
780, 16,
781, 8,
781, 12,
782, 16,
783, 16,
783, 2,
784, 16,
784, 2,
785, 13,
785, 18,
786, 14,
786, 18,
787, 12,
787, 18,
788, 11,
788, 18,
789, 14,
790, 14,
791, 14,
791, 9,
792, 14,
792, 8,
793, 6,
793, 4,
794, 7,
794, 2,
795, 7,
795, 2,
796, 13,
797, 9,
797, 3,
798, 12,
798, 9,
799, 17,
799, 16,
800, 14,
801, 9,
801, 18,
802, 2,
802, 8,
803, 4,
804, 4,
804, 16,
805, 6,
805, 9,
806, 10,
806, 8,
807, 13,
10001, 14,
10002, 14,
10003, 14,
10004, 7,
10004, 5,
10005, 7,
10005, 9,
10006, 12,
10006, 3,
10007, 8,
10007, 16,
10008, 13,
10008, 10,
10009, 13,
10009, 11,
10010, 13,
10010, 15,
10011, 13,
10011, 3,
10012, 13,
10012, 12,
10013, 10,
10014, 11,
10015, 15,
10016, 11,
10017, 10,
10017, 14,
10018, 1,
10018, 2,
10019, 3,
10020, 13,
10020, 3,
10021, 5,
10021, 3,
10022, 16,
10022, 15,
10023, 16,
10023, 15,
10024, 11,
10024, 2,
10025, 14,
10026, 9,
10026, 8,
10027, 8,
10027, 12,
10028, 8,
10028, 12,
10029, 8,
10029, 12,
10030, 8,
10030, 12,
10031, 8,
10031, 12,
10032, 8,
10032, 12,
10033, 12,
10033, 4,
10034, 10,
10034, 16,
10035, 10,
10035, 3,
10036, 11,
10037, 14,
10038, 8,
10038, 4,
10039, 1,
10040, 7,
10040, 3,
10041, 11,
10041, 17,
10042, 6,
10042, 3,
10043, 14,
10043, 2,
10044, 14,
10045, 13,
10045, 16,
10046, 7,
10046, 9,
10047, 7,
10047, 2,
10048, 17,
10048, 10,
10049, 6,
10049, 17,
10050, 10,
10050, 2,
10051, 14,
10051, 18,
10052, 9,
10052, 18,
10053, 9,
10054, 2,
10054, 14,
10055, 13,
10056, 8,
10057, 17,
10058, 16,
10058, 5,
10059, 2,
10059, 9,
10060, 12,
10060, 15,
10061, 18,
10062, 16,
10062, 14,
10063, 16,
10063, 14,
10064, 11,
10064, 5,
10065, 12,
10065, 16,
10066, 17,
10066, 8,
10067, 16,
10067, 18,
10068, 14,
10068, 2,
10069, 1,
10069, 18,
10070, 11,
10070, 17,
10071, 11,
10071, 14,
10072, 9,
10072, 5,
10073, 1,
10073, 3,
10074, 15,
10075, 6,
10075, 18,
10076, 9,
10076, 14,
10077, 11,
10078, 5,
10078, 10,
10079, 16,
10079, 3,
10080, 13,
10081, 13,
10082, 13,
10083, 13,
10084, 13,
10085, 13,
10086, 14,
10086, 17,
10087, 10,
10087, 5,
10088, 1,
10088, 2,
10089, 16,
10089, 3,
10090, 7,
10090, 4,
10091, 17,
10091, 1,
10092, 17,
10092, 1,
10093, 17,
10093, 1,
10094, 13,
10095, 13,
10096, 13,
10097, 13,
10098, 13,
10099, 13,
10100, 13,
10100, 14,
10101, 15,
10101, 9,
10102, 15,
10102, 9,
10103, 15,
10104, 15,
10104, 18,
10105, 5,
10105, 9,
10106, 5,
10106, 9,
10107, 17,
10108, 17,
10109, 6,
10109, 13,
10110, 6,
10110, 13,
10111, 6,
10111, 13,
10112, 4,
10112, 17,
10113, 4,
10113, 17,
10114, 12,
10114, 16,
10115, 10,
10115, 8,
10116, 11,
10116, 17,
10117, 11,
10117, 17,
10118, 16,
10118, 5,
10119, 16,
10119, 5,
10120, 16,
10120, 5,
10121, 1,
10122, 7,
10122, 13,
10123, 13,
10123, 3,
10124, 14,
10124, 3,
10125, 8,
10125, 3,
10126, 6,
10127, 11,
10128, 12,
10129, 4,
10129, 10,
10130, 6,
10130, 3,
10131, 6,
10131, 3,
10132, 6,
10132, 3,
10133, 6,
10133, 3,
10134, 6,
10134, 3,
10135, 6,
10135, 3,
10136, 6,
10136, 3,
10137, 6,
10137, 3,
10138, 6,
10138, 3,
10139, 6,
10139, 3,
10140, 6,
10140, 3,
10141, 6,
10141, 3,
10142, 6,
10142, 3,
10143, 8,
10143, 18,
10144, 8,
10144, 18,
10145, 8,
10145, 18,
10146, 16,
10146, 2,
10147, 9,
10147, 18,
10148, 13,
10149, 10,
10149, 8,
10150, 7,
10150, 18,
10151, 6,
10152, 6,
10153, 11,
10153, 7,
10154, 13,
10154, 9,
10155, 14,
10155, 9,
10156, 14,
10156, 8,
10157, 14,
10157, 16];
