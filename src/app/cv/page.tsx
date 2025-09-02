import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Mail, MapPin, Linkedin, Github, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function CVPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-6 py-12 max-w-6xl">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">IT Analyst</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  BSc First Class Hons Computer Science (with integrated year in industry) Placement year IT Analyst at G-Research for 1 year and 3 months providing technical support, system administration and cyber-security operations
                  </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>*************@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>United Kingdom</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Globe className="w-4 h-4" />
                    Portfolio
                  </Button>
                </div>
              </div>

              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/profile.png"
                      alt="Thomas Roethenbaugh"
                      width={500}
                      height={500} //256
                      className="w-full h-full object-cover"
                      priority
                      unoptimized={false}
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">TR</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Work Experience</h3>
            <div className="space-y-8">
              <Card className="border-l-4 border-l-purple-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Placement Year IT Analyst</CardTitle>
                      <p className="text-purple-600 font-semibold">G-Research</p>
                    </div>
                    <Badge variant="secondary">2023 - 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Provided IT support and systems administration across a wide range of technologies, including PowerShell, Mimecast, CyberArk, VMWare, Citrix, and Cisco Meraki</li>
                    <li>• Completed engineering project tickets under the guidance of a senior IT engineer, such as developing an automated checking system for onboarding new joiners to ensure correct account and storage setup</li>
                    <li>• Gained hands-on experience in Linux system administration and engineering, expanding my knowledge of the operating system from a beginner level</li>
                    <li>• Took on additional responsibility for cyber security operations during a company restructuring, including handling email releases, download requests, and collaborating with the security investigation team on compromised or suspicious accounts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">UX/UI Researcher</CardTitle>
                      <p className="text-blue-600 font-semibold">Outline Wales</p>
                    </div>
                    <Badge variant="secondary">2021 - 2021</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Collaborated with a local start-up to support the development of an augmented reality art app</li>
                    <li>• Collected user feedback and data both online and in-person to assess reactions to the app and its concept</li>
                    <li>• Organised and securely managed survey responses and research data</li>
                    <li>• Created graphs and presentations to communicate findings to the manager and team members</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">General Assistant</CardTitle>
                      <p className="text-green-600 font-semibold">Sainsbury&apos;s</p>
                    </div>
                    <Badge variant="secondary">2017 - 2021</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Trained in all but one department, enabling flexible work assignments based on daily operational needs</li>
                    <li>• Frequently organised and guided less experienced colleagues in both the food and backdoor departments</li>
                    <li>• Developed strong customer service skills and learned to independently solve problems in a fast-paced environment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education & Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education */}
            <section>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Computer Science (with integrated year in industry)</CardTitle>
                    <p className="text-slate-600">Aberystwyth University</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Specialization: Cybersecurity & Networking</span>
                      <Badge variant="outline">2021 - 2025</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Computing</CardTitle>
                    <p className="text-slate-600">The Bedford College Group</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">An access to higher education course specialising in computing</span>
                      <Badge variant="outline">2020 - 2021</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Skills</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Programming Languages</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-600 dark:text-slate-300">IT Support</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-600 dark:text-slate-300">Bash</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-slate-600 dark:text-slate-300">Python</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>PowerShell</Badge>
                    <Badge>Bash</Badge>
                    <Badge>Networking</Badge>
                    <Badge>System Administration</Badge>
                    <Badge>Active Directory</Badge>
                    <Badge>Citrix</Badge>
                    <Badge>Git</Badge>
                    <Badge>Linux</Badge>
                  </div>
                </div>
              </div>
            </section>
          </div>

          

          {/* Footer */}
          <footer className="text-center py-8 border-t">
            <p className="text-slate-600">© 2025 Thomas Roethenbaugh</p>
          </footer>
        </main>
      </div>
    </>
  )
}
