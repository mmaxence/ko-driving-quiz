import { Question } from "@/types";

export const CATEGORIES = [
  "교통법규",
  "안전운전",
  "도로표지",
  "자동차관리",
  "응급처치",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const questions: Question[] = [
  // 교통법규 (Traffic Laws)
  {
    id: 1,
    category: "교통법규",
    question: "편도 1차로 도로에서 앞차를 추월하려고 할 때 올바른 방법은?",
    options: [
      "앞차의 좌측으로 추월한다",
      "앞차의 우측으로 추월한다",
      "경음기를 울리며 추월한다",
      "앞차와 나란히 주행하며 추월한다",
    ],
    answer: 0,
  },
  {
    id: 2,
    category: "교통법규",
    question: "신호등이 없는 교차로에서 동시에 진입한 경우 우선순위는?",
    options: [
      "좌측 도로의 차에 양보",
      "우측 도로의 차에 양보",
      "큰 차에 양보",
      "먼저 진입한 차에 양보",
    ],
    answer: 1,
  },
  {
    id: 3,
    category: "교통법규",
    question: "음주운전의 혈중알코올농도 처벌 기준은?",
    options: [
      "0.01% 이상",
      "0.02% 이상",
      "0.03% 이상",
      "0.05% 이상",
    ],
    answer: 2,
  },
  {
    id: 4,
    category: "교통법규",
    question: "어린이 보호구역에서의 제한속도는?",
    options: [
      "시속 20km 이하",
      "시속 30km 이하",
      "시속 40km 이하",
      "시속 50km 이하",
    ],
    answer: 1,
  },
  {
    id: 5,
    category: "교통법규",
    question: "황색 실선의 중앙선이 의미하는 것은?",
    options: [
      "추월 가능 구간",
      "추월 금지 구간",
      "주정차 금지 구간",
      "서행 구간",
    ],
    answer: 1,
  },
  {
    id: 6,
    category: "교통법규",
    question: "긴급자동차가 접근할 때 올바른 행동은?",
    options: [
      "그대로 주행한다",
      "속도를 높여 비켜준다",
      "도로의 우측 가장자리에 일시정지한다",
      "좌측으로 비켜준다",
    ],
    answer: 2,
  },
  {
    id: 7,
    category: "교통법규",
    question: "운전면허 정지 기간 중 운전을 하면 어떻게 되는가?",
    options: [
      "벌금만 부과",
      "면허 취소",
      "경고 처분",
      "정지 기간 연장",
    ],
    answer: 1,
  },
  {
    id: 8,
    category: "교통법규",
    question: "보행자 전용도로에서 차마의 통행이 허용되는 경우는?",
    options: [
      "택시가 승객을 태울 때",
      "경찰관의 지시가 있을 때",
      "야간에 통행할 때",
      "서행할 때",
    ],
    answer: 1,
  },
  {
    id: 9,
    category: "교통법규",
    question: "고속도로 최저 속도는?",
    options: [
      "시속 30km",
      "시속 40km",
      "시속 50km",
      "시속 60km",
    ],
    answer: 2,
  },
  {
    id: 10,
    category: "교통법규",
    question: "적색 신호에서 우회전이 가능한 경우는?",
    options: [
      "언제든지 가능하다",
      "보행자가 없을 때 서행하며 가능하다",
      "우회전 신호가 있을 때만 가능하다",
      "다른 차가 없을 때 가능하다",
    ],
    answer: 2,
  },

  // 안전운전 (Safe Driving)
  {
    id: 11,
    category: "안전운전",
    question: "빗길에서 제동거리가 늘어나는 비율은?",
    options: [
      "약 1.2배",
      "약 1.5배",
      "약 2배",
      "약 3배",
    ],
    answer: 1,
  },
  {
    id: 12,
    category: "안전운전",
    question: "야간 운전 시 마주 오는 차의 전조등에 눈이 부실 때는?",
    options: [
      "전조등을 상향으로 전환한다",
      "속도를 높여 빨리 지나간다",
      "시선을 우측 아래로 향한다",
      "경음기를 울린다",
    ],
    answer: 2,
  },
  {
    id: 13,
    category: "안전운전",
    question: "안전띠를 착용하지 않았을 때의 벌점은?",
    options: [
      "벌점 없음, 과태료만 부과",
      "벌점 5점",
      "벌점 10점",
      "벌점 15점",
    ],
    answer: 0,
  },
  {
    id: 14,
    category: "안전운전",
    question: "터널 진입 시 올바른 운전 방법은?",
    options: [
      "속도를 높여 빨리 통과한다",
      "전조등을 켜고 속도를 줄인다",
      "경음기를 울리며 진입한다",
      "앞차와의 간격을 줄인다",
    ],
    answer: 1,
  },
  {
    id: 15,
    category: "안전운전",
    question: "장시간 운전 시 졸음을 느끼면?",
    options: [
      "창문을 열고 계속 운전한다",
      "라디오 볼륨을 높인다",
      "즉시 안전한 곳에 정차하고 휴식한다",
      "커피를 마시며 운전한다",
    ],
    answer: 2,
  },
  {
    id: 16,
    category: "안전운전",
    question: "안개가 짙을 때 올바른 운전 방법은?",
    options: [
      "전조등 상향등을 켠다",
      "안개등과 전조등 하향등을 켠다",
      "비상등을 켠다",
      "실내등을 켠다",
    ],
    answer: 1,
  },
  {
    id: 17,
    category: "안전운전",
    question: "내리막길에서 브레이크가 고장 났을 때 가장 먼저 해야 할 것은?",
    options: [
      "엔진을 끈다",
      "기어를 저단으로 변속한다",
      "핸들을 좌우로 흔든다",
      "문을 열고 뛰어내린다",
    ],
    answer: 1,
  },
  {
    id: 18,
    category: "안전운전",
    question: "수막현상(하이드로플래닝)이 발생하기 쉬운 조건은?",
    options: [
      "타이어 공기압이 높을 때",
      "타이어 마모가 심하고 빗길에서 고속 주행할 때",
      "건조한 도로에서 서행할 때",
      "눈길에서 저속 주행할 때",
    ],
    answer: 1,
  },
  {
    id: 19,
    category: "안전운전",
    question: "교차로에서 좌회전할 때 가장 안전한 방법은?",
    options: [
      "속도를 높여 빠르게 좌회전한다",
      "교차로 중심 안쪽으로 서행하며 좌회전한다",
      "반대편 차로로 진입하여 좌회전한다",
      "경음기를 울리며 좌회전한다",
    ],
    answer: 1,
  },
  {
    id: 20,
    category: "안전운전",
    question: "어린이가 도로에서 놀고 있을 때 운전자의 올바른 행동은?",
    options: [
      "경음기를 울려 경고한다",
      "어린이가 비킬 때까지 기다린다",
      "일시정지 후 안전을 확인하고 서행한다",
      "반대 차로로 통과한다",
    ],
    answer: 2,
  },

  // 도로표지 (Road Signs)
  {
    id: 21,
    category: "도로표지",
    question: "원형에 빨간 테두리의 표지판은 어떤 종류인가?",
    options: [
      "지시표지",
      "주의표지",
      "규제표지",
      "안내표지",
    ],
    answer: 2,
  },
  {
    id: 22,
    category: "도로표지",
    question: "삼각형 모양의 노란색 표지판은?",
    options: [
      "규제표지",
      "주의표지",
      "지시표지",
      "보조표지",
    ],
    answer: 1,
  },
  {
    id: 23,
    category: "도로표지",
    question: "파란색 원형 표지판은 어떤 종류인가?",
    options: [
      "규제표지",
      "주의표지",
      "지시표지",
      "안내표지",
    ],
    answer: 2,
  },
  {
    id: 24,
    category: "도로표지",
    question: "도로 바닥에 그려진 흰색 마름모 표시의 의미는?",
    options: [
      "주정차 금지",
      "속도 줄이기",
      "전방에 횡단보도 있음",
      "차로 변경 금지",
    ],
    answer: 2,
  },
  {
    id: 25,
    category: "도로표지",
    question: "역삼각형 모양의 '양보' 표지판을 보았을 때는?",
    options: [
      "무조건 정지한다",
      "다른 차에 진로를 양보한다",
      "속도를 높인다",
      "좌회전한다",
    ],
    answer: 1,
  },
  {
    id: 26,
    category: "도로표지",
    question: "노면에 그려진 흰색 실선의 의미는?",
    options: [
      "차선 변경 가능",
      "차선 변경 금지",
      "주정차 가능",
      "추월 가능",
    ],
    answer: 1,
  },
  {
    id: 27,
    category: "도로표지",
    question: "녹색 바탕에 흰색 글씨의 표지판은?",
    options: [
      "규제표지",
      "주의표지",
      "지시표지",
      "안내표지(고속도로)",
    ],
    answer: 3,
  },
  {
    id: 28,
    category: "도로표지",
    question: "빨간색 팔각형 표지판은 무엇을 의미하는가?",
    options: [
      "서행",
      "일시정지",
      "진입금지",
      "주차금지",
    ],
    answer: 1,
  },
  {
    id: 29,
    category: "도로표지",
    question: "노란색 점선 차선의 의미는?",
    options: [
      "차선 변경 금지",
      "주정차 금지",
      "차선 변경 가능",
      "추월 금지",
    ],
    answer: 2,
  },
  {
    id: 30,
    category: "도로표지",
    question: "도로 위 지그재그 노면표시의 의미는?",
    options: [
      "과속방지",
      "서행구간",
      "전방 횡단보도 주의",
      "미끄러운 도로",
    ],
    answer: 2,
  },

  // 자동차관리 (Vehicle Maintenance)
  {
    id: 31,
    category: "자동차관리",
    question: "타이어 공기압이 부족할 때 나타나는 현상은?",
    options: [
      "연비가 좋아진다",
      "타이어 중앙부가 마모된다",
      "타이어 양쪽 가장자리가 마모된다",
      "제동거리가 짧아진다",
    ],
    answer: 2,
  },
  {
    id: 32,
    category: "자동차관리",
    question: "엔진 오일을 점검하는 올바른 방법은?",
    options: [
      "엔진 가동 중에 점검한다",
      "주행 직후 바로 점검한다",
      "엔진 정지 후 5분 정도 기다린 후 점검한다",
      "언제든 상관없다",
    ],
    answer: 2,
  },
  {
    id: 33,
    category: "자동차관리",
    question: "냉각수의 적정 수준은?",
    options: [
      "보조탱크의 MIN 이하",
      "보조탱크의 MIN과 MAX 사이",
      "보조탱크의 MAX 이상",
      "라디에이터 캡을 열어 확인",
    ],
    answer: 1,
  },
  {
    id: 34,
    category: "자동차관리",
    question: "브레이크액이 부족하면 나타나는 현상은?",
    options: [
      "엔진 소리가 커진다",
      "핸들이 무거워진다",
      "브레이크 페달이 깊이 밟힌다",
      "속도가 올라간다",
    ],
    answer: 2,
  },
  {
    id: 35,
    category: "자동차관리",
    question: "자동차 계기판에 배터리 경고등이 켜졌을 때는?",
    options: [
      "무시하고 계속 운전한다",
      "충전 장치(발전기)를 점검한다",
      "타이어를 점검한다",
      "에어컨을 끈다",
    ],
    answer: 1,
  },
  {
    id: 36,
    category: "자동차관리",
    question: "와이퍼 블레이드 교체 시기는?",
    options: [
      "1년마다",
      "줄무늬가 생기거나 닦임이 불량할 때",
      "차량 검사 시에만",
      "3년마다",
    ],
    answer: 1,
  },
  {
    id: 37,
    category: "자동차관리",
    question: "에어필터가 막히면 나타나는 현상은?",
    options: [
      "냉각 성능 저하",
      "출력 저하 및 연비 악화",
      "브레이크 성능 저하",
      "조향 장치 이상",
    ],
    answer: 1,
  },
  {
    id: 38,
    category: "자동차관리",
    question: "타이어 트레드 깊이의 법적 최소 기준은?",
    options: [
      "0.6mm",
      "1.0mm",
      "1.6mm",
      "2.0mm",
    ],
    answer: 2,
  },

  // 응급처치 (First Aid)
  {
    id: 39,
    category: "응급처치",
    question: "교통사고 발생 시 가장 먼저 해야 할 것은?",
    options: [
      "보험회사에 연락한다",
      "사고 현장을 보존하고 부상자를 구호한다",
      "경찰에 먼저 신고한다",
      "차량을 이동시킨다",
    ],
    answer: 1,
  },
  {
    id: 40,
    category: "응급처치",
    question: "심폐소생술(CPR) 시 흉부압박 속도는?",
    options: [
      "분당 60~80회",
      "분당 80~100회",
      "분당 100~120회",
      "분당 120~140회",
    ],
    answer: 2,
  },
  {
    id: 41,
    category: "응급처치",
    question: "출혈이 심한 부상자에 대한 응급처치는?",
    options: [
      "상처 부위를 심장보다 낮게 한다",
      "깨끗한 천으로 상처를 직접 압박한다",
      "지혈대를 바로 사용한다",
      "물로 상처를 씻는다",
    ],
    answer: 1,
  },
  {
    id: 42,
    category: "응급처치",
    question: "척추 부상이 의심되는 환자의 처치 방법은?",
    options: [
      "환자를 편안한 자세로 옮긴다",
      "환자를 움직이지 않게 고정하고 119에 신고한다",
      "환자를 일으켜 세운다",
      "환자에게 물을 먹인다",
    ],
    answer: 1,
  },
  {
    id: 43,
    category: "응급처치",
    question: "화상을 입었을 때 올바른 응급처치는?",
    options: [
      "화상 부위에 된장을 바른다",
      "물집을 터뜨린다",
      "흐르는 찬물로 15분 이상 식힌다",
      "기름을 바른다",
    ],
    answer: 2,
  },
  {
    id: 44,
    category: "응급처치",
    question: "의식이 없는 환자를 발견했을 때 첫 번째 행동은?",
    options: [
      "인공호흡을 시작한다",
      "환자의 반응을 확인한다",
      "가슴 압박을 시작한다",
      "환자를 흔들어 깨운다",
    ],
    answer: 1,
  },
  {
    id: 45,
    category: "응급처치",
    question: "자동심장충격기(AED) 패드를 부착하는 올바른 위치는?",
    options: [
      "양쪽 어깨",
      "오른쪽 쇄골 아래와 왼쪽 겨드랑이 옆",
      "양쪽 허벅지",
      "목과 등",
    ],
    answer: 1,
  },
];

export function getRandomQuestions(n: number): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

export function getQuestionsByCategory(category: string): Question[] {
  return questions.filter((q) => q.category === category);
}

export function getRandomQuestionsByCategory(
  category: string | null,
  n: number
): Question[] {
  const pool = category ? getQuestionsByCategory(category) : questions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}
