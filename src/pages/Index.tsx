import { useState } from "react";
import {
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Gamepad2,
  MapPin,
  UserCheck,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  Plus,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DISCORD_INVITE = "https://discord.gg/invite/derzhava";

const channels = [
  {
    category: "📢 Информация",
    items: [
      { name: "анонсы", locked: false },
      { name: "правила", locked: false },
      { name: "новости-сервера", locked: false },
    ],
    voice: [],
  },
  {
    category: "🏛️ Гос. фракции",
    items: [
      { name: "правительство", locked: false, emoji: "🏛️" },
      { name: "фсб", locked: false, emoji: "🕵️" },
      { name: "армия", locked: false, emoji: "🎖️" },
      { name: "гибдд", locked: false, emoji: "🚔" },
      { name: "умвд", locked: false, emoji: "👮" },
      { name: "цб", locked: false, emoji: "🏦" },
      { name: "сми", locked: false, emoji: "📺" },
      { name: "фсин", locked: false, emoji: "⛓️" },
    ],
    voice: ["Дежурная часть", "Оперативный штаб"],
  },
  {
    category: "🔫 ОПГ",
    items: [
      { name: "арз-опг", locked: false, emoji: "🗡️" },
      { name: "бат-опг", locked: false, emoji: "🦇" },
      { name: "лыт-опг", locked: false, emoji: "🐺" },
      { name: "вербовка", locked: false, emoji: "👥" },
    ],
    voice: ["Сходняк", "Разборки"],
  },
  {
    category: "🔧 Администрация",
    items: [
      { name: "жалобы", locked: false },
      { name: "заявки-на-роль", locked: false },
      { name: "репорты", locked: false },
      { name: "admin-чат", locked: true },
    ],
    voice: ["Совет Администрации"],
  },
  {
    category: "🚪 Личные комнаты",
    items: [
      { name: "создать-свою-комнату", locked: false },
      { name: "room-виктор", locked: true },
      { name: "room-орлов", locked: true },
    ],
    voice: ["Создать голосовую", "room-виктор", "room-орлов"],
  },
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleCategory = (cat: string) => {
    setCollapsed((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center text-lg">
              🏛️
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">ДЕРЖАВА | MOSCOW</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Разговорная ролевая игра · Discord RP сервер</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Users className="w-4 h-4 mr-2" />
              Сообщество
            </Button>
            <Button
              className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium"
              onClick={() => window.open(DISCORD_INVITE, "_blank")}
            >
              Вступить
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Users className="w-4 h-4 mr-2" />
                Сообщество
              </Button>
              <Button
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium"
                onClick={() => window.open(DISCORD_INVITE, "_blank")}
              >
                Вступить
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет Discord */}
      <div className="flex min-h-screen">
        {/* Иконки серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer text-xl">
            🏛️
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["🚓", "🔫", "⚖️", "🏙️"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
          <div className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#3ba55c] mt-auto mb-2">
            <Plus className="w-5 h-5 text-[#3ba55c]" />
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-64 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-base">ДЕРЖАВА | MOSCOW</h2>
                <p className="text-[#72767d] text-xs">Roleplay сервер</p>
              </div>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 p-2 overflow-y-auto">
              {channels.map((section) => (
                <div key={section.category} className="mb-3">
                  <button
                    className="flex items-center gap-1 w-full px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide hover:text-[#dcddde]"
                    onClick={() => toggleCategory(section.category)}
                  >
                    {collapsed[section.category] ? (
                      <ChevronRight className="w-3 h-3" />
                    ) : (
                      <ChevronDown className="w-3 h-3" />
                    )}
                    <span>{section.category}</span>
                  </button>

                  {!collapsed[section.category] && (
                    <div className="mt-1 space-y-0.5">
                      {section.items.map((ch) => (
                        <div
                          key={ch.name}
                          className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer group"
                        >
                          {"emoji" in ch && ch.emoji ? (
                            <span className="text-sm flex-shrink-0 w-4 text-center">{ch.emoji}</span>
                          ) : (
                            <Hash className="w-4 h-4 flex-shrink-0" />
                          )}
                          <span className="text-sm flex-1 truncate">{ch.name}</span>
                          {ch.locked && <Lock className="w-3 h-3 text-[#72767d]" />}
                          {ch.name === "создать-свою-комнату" && (
                            <Plus className="w-3 h-3 text-[#72767d] group-hover:text-[#3ba55c]" />
                          )}
                        </div>
                      ))}
                      {section.voice.map((vc) => (
                        <div
                          key={vc}
                          className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                        >
                          <Mic className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate flex-1">{vc}</span>
                          {vc === "Создать голосовую" && <Plus className="w-3 h-3 text-[#72767d] ml-auto" />}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">Р</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Рядовой</div>
                <div className="text-[#b9bbbe] text-xs truncate">#0001</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Чат */}
          <div className="flex-1 flex flex-col">
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">анонсы</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Официальный канал ДЕРЖАВА | MOSCOW</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Бот */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                  🏛️
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">ДЕРЖАВА Бот</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 18:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в ДЕРЖАВА | MOSCOW!</strong> Живой разговорный RP-сервер с полноценными фракциями, криминальным миром и администрацией.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">На сервере есть:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>🏛️ Государственные фракции — Правительство, ФСБ, Армия, ГИБДД, УМВД, ЦБ, СМИ, ФСИН</li>
                        <li>🔫 ОПГ — АРЗ, БАТ, ЛЫТ</li>
                        <li>🔧 Администрация с открытыми жалобами и заявками</li>
                        <li>🚪 Личные комнаты — создай свою или вступи в чужую</li>
                        <li>📅 Сюжетные ивенты каждую неделю</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Игрок — полицейский */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">О</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#3b82f6] font-medium text-sm sm:text-base">Полк._Орлов</span>
                    <span className="bg-[#1d4ed8] text-white text-xs px-1 rounded font-bold">МВД</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 18:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Всем добрый вечер. ГУ МВД объявляет набор — патрульные и следователи нужны. Форму выдадим, оружие на месте.
                  </div>

                  {/* Rich Presence */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl">🚓</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                      <Button size="sm" className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded">
                        <Settings className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Профиль</span>
                      </Button>
                    </div>
                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Орлов</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <span>orlov_mvd</span>
                          <span>·</span>
                          <span className="text-[#3b82f6]">Полковник МВД</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="bg-[#36393f] rounded-lg p-2 sm:p-3">
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <span>🚓</span>
                            <span>На дежурстве. Нарушаешь — получишь.</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex border-b border-[#40444b] mb-3">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">Персонаж</button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">Активность</button>
                      </div>
                      <div>
                        <div className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В игре</div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 text-xl">🏛️</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">ДЕРЖАВА | MOSCOW</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1 flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> Тверская — патруль
                            </div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Фракция: ГУ МВД Москвы</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">2:14 в сессии</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Игрок — криминал */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-700 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">В</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-[#ef4444] font-medium text-sm sm:text-base">Витя_Ореховский</span>
                    <span className="bg-[#7f1d1d] text-red-300 text-xs px-1 rounded font-bold">ОПГ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 18:12</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Ищем людей с характером. Трусов просим не беспокоить. Пишите в личку — проверим.
                  </div>
                </div>
              </div>

              {/* Секция вступления */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
                  Как попасть в ДЕРЖАВА | MOSCOW
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Вступи в Discord</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Нажми кнопку — и ты уже в сообществе</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай персонажа</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Имя, биография, выбор фракции или криминала</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Живи в роли</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Прыгай в чат и начинай свою историю в Москве</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium"
                    onClick={() => window.open(DISCORD_INVITE, "_blank")}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Вступить в Discord
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Правила сервера
                  </Button>
                </div>
              </div>

              {/* Фракции и роли */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Фракции и роли</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: "🏛️", title: "Государственные", desc: "Правительство, ФСБ, Армия, ГИБДД, УМВД, ЦБ, СМИ, ФСИН" },
                    { icon: "🔫", title: "ОПГ", desc: "АРЗ ОПГ, БАТ ОПГ, ЛЫТ ОПГ" },
                    { icon: "🔧", title: "Администрация", desc: "Жалобы, заявки на роль, открытый репорт" },
                    { icon: "🚪", title: "Своя комната", desc: "Создай личный канал — текстовый или голосовой" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-2xl mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-[#72767d] text-xs sm:text-sm">Сообщение #анонсы</div>
              </div>
            </div>
          </div>

          {/* Участники */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В игре — 5</h3>
              <div className="space-y-2">
                {[
                  { name: "Полк._Орлов", status: "🚓 Патруль · Тверская", avatar: "О", color: "from-blue-700 to-blue-500" },
                  { name: "Витя_Ореховский", status: "🔫 Орехово · ОПГ", avatar: "В", color: "from-red-700 to-red-500" },
                  { name: "Мэр_Соколов", status: "🏛️ Мэрия · заседание", avatar: "М", color: "from-yellow-600 to-yellow-400" },
                  { name: "Лена_Воронова", status: "💼 Кафе на Арбате", avatar: "Л", color: "from-pink-500 to-orange-400" },
                  { name: "Новичок_4821", status: "📋 Создаёт персонажа", avatar: "Н", color: "from-gray-500 to-gray-600" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative flex-shrink-0`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;